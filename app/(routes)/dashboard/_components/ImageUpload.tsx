"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { CloudUpload, Loader2Icon, WandSparkles, X } from 'lucide-react'
import Image from 'next/image'
import { v4 as uuid4 } from "uuid";
import React, { ChangeEvent, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import axios from 'axios'
import { useAuthContext } from '@/app/provider'
import { useRouter } from 'next/navigation'
import Constants from '@/data/Constants'
import { toast } from 'sonner'

function ImageUpload() {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [file, setFile] = useState<File | null>(null);
    const [model, setModel] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const { user } = useAuthContext();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const OnImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            const selectedFile = files[0];
            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
        }
    }

    const uploadImageToCloudinary = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await fetch('/api/upload-image', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error);
        }
        
        return data.url;
    };

    const OnConverToCodeButtonClick = async () => {
        if (!file || !model || !description) {
            toast.error("Please fill all fields");
            return;
        }
        
        setLoading(true);
        
        try {
            // Step 1: Upload image to Cloudinary
            const imageUrl = await uploadImageToCloudinary(file);
            console.log("Image uploaded:", imageUrl);

            const uid = uuid4();
            
            // Step 2: Save to database
            const result = await axios.post('/api/wireframe-to-code', {
                uid: uid,
                description: description,
                imageUrl: imageUrl,
                model: model,
                email: user?.email
            });
            
            if (result.data?.error) {
                toast.error('Not Enough Credits!');
                setLoading(false);
                return;
            }
            
            toast.success('Image uploaded successfully!');
            router.push('/view-code/' + uid);
            
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to upload image. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const clearImage = () => {
        setPreviewUrl(null);
        setFile(null);
    }

    return (
        <div className='mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {!previewUrl ? (
                    <div className='p-7 border border-dashed rounded-md shadow-md flex flex-col items-center justify-center'>
                        <CloudUpload className='h-10 w-10 text-primary' />
                        <h2 className='font-bold text-lg'>Upload Image</h2>
                        <p className='text-gray-400 mt-2'>Click button to select wireframe image</p>
                        
                        <div className='p-5 border border-dashed w-full flex mt-4 justify-center'>
                            <label htmlFor='imageSelect' className='cursor-pointer'>
                                <h2 className='p-2 bg-blue-100 font-bold text-primary rounded-md px-5'>
                                    Select Image
                                </h2>
                            </label>
                        </div>
                        
                        <input 
                            type="file" 
                            id='imageSelect'
                            className='hidden'
                            accept="image/*"
                            onChange={OnImageSelect}
                        />
                    </div>
                ) : (
                    <div className='p-5 border border-dashed rounded-md'>
                        <Image 
                            src={previewUrl} 
                            alt='preview' 
                            width={500} 
                            height={500}
                            className='w-full h-[250px] object-contain'
                        />
                        <Button
                            variant="ghost"
                            size="sm"
                            className='w-full mt-2'
                            onClick={clearImage}
                        >
                            <X className='mr-2 h-4 w-4' />
                            Remove Image
                        </Button>
                    </div>
                )}

                <div className='p-7 border shadow-md rounded-lg'>
                    <h2 className='font-bold text-lg'>Select AI Model</h2>
                    <Select onValueChange={setModel} value={model}>
                        <SelectTrigger className="w-full mt-2">
                            <SelectValue placeholder="Select AI Model" />
                        </SelectTrigger>
                        <SelectContent>
                            {Constants?.AiModelList.map((model, index) => (
                                <SelectItem value={model.name} key={index}>
                                    <div className='flex items-center gap-2'>
                                        <Image 
                                            src={model.icon} 
                                            alt={model.name} 
                                            width={25} 
                                            height={25} 
                                        />
                                        <h2>{model.name}</h2>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <h2 className='font-bold text-lg mt-7'>Enter Description</h2>
                    <Textarea
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className='mt-3 h-[150px]'
                        placeholder='Describe your web page...'
                    />
                </div>
            </div>

            <div className='mt-10 flex items-center justify-center'>
                <Button 
                    onClick={OnConverToCodeButtonClick} 
                    disabled={loading || !file || !model || !description}
                    size="lg"
                >
                    {loading ? (
                        <>
                            <Loader2Icon className='mr-2 h-5 w-5 animate-spin' />
                            Uploading...
                        </>
                    ) : (
                        <>
                            <WandSparkles className='mr-2 h-5 w-5' />
                            Convert to Code
                        </>
                    )}
                </Button>
            </div>
        </div>
    )
}

export default ImageUpload