import { RECORD } from '@/app/view-code/[uid]/page'
import { Button } from '@/components/ui/button'
import Constants from '@/data/Constants'
import { Code } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DesignCard({ item }: any) {
    // Find the model object, with fallback
    const modelObj = item?.model 
        ? Constants.AiModelList.find((x) => x.name === item.model)
        : null;

    // Fallback model info if not found
    const modelDisplay = modelObj || {
        name: item?.model || 'Unknown Model',
        icon: '/google.png', // Default icon
        modelName: 'unknown'
    };

    return (
        <div className='p-5 border rounded-lg hover:shadow-lg transition-shadow duration-300'>
            <Image 
                src={item?.imageUrl} 
                alt='wireframe image'
                width={300} 
                height={200}
                className='w-full h-[200px] object-cover bg-white rounded-lg'
            />

            <div className='mt-2'>
                <h2 className='line-clamp-3 text-gray-400 text-sm'>
                    {item?.description || 'No description available'}
                </h2>
                
                <div className='flex justify-between items-center mt-4 gap-2'>
                    <div className='flex items-center gap-2 p-2 bg-gray-50 rounded-full'>
                        <Image 
                            src={modelDisplay.icon} 
                            alt={modelDisplay.name}
                            width={30}
                            height={30}
                            className='rounded-full'
                        />
                        <h2 className='text-sm font-medium line-clamp-1'>
                            {modelDisplay.name}
                        </h2>
                    </div>
                    
                    <Link href={'/view-code/' + item?.uid}>
                        <Button className='flex items-center gap-2'> 
                            <Code className='h-4 w-4' /> 
                            View Code
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DesignCard