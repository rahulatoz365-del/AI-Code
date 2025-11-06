import Constants from "@/data/Constants";
import { NextRequest } from "next/server";
import OpenAI from "openai"

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_AI_API_KEY,
})

export const maxDuration = 300;

export async function POST(req: NextRequest) {
    try {
        const { model, description, imageUrl } = await req.json();

        const ModelObj = Constants.AiModelList.find(item => item.name == model)
        const modelName = ModelObj?.modelName;
        console.log('Using model:', modelName);

        if (!modelName) {
            return new Response(JSON.stringify({ error: 'Model not found' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const response = await openai.chat.completions.create({
            model: modelName,
            stream: true,
            messages: [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": description
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": imageUrl
                            }
                        }
                    ]
                }
            ]
        });

        // Create a readable stream
        const stream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of response) {
                        const text = chunk.choices?.[0]?.delta?.content || "";
                        controller.enqueue(new TextEncoder().encode(text));
                    }
                    controller.close();
                } catch (error) {
                    console.error('Stream error:', error);
                    controller.error(error);
                }
            },
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            },
        });

    } catch (error: any) {
        console.error('AI Model Error:', error);
        return new Response(JSON.stringify({ 
            error: error.message || 'Failed to generate code',
            details: error.error || error 
        }), {
            status: error.status || 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}