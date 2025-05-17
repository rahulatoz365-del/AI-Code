"use client"
import { useAuthContext } from '@/app/provider'
import axios from 'axios'
import { Coins } from 'lucide-react' // Added icon
import React, { useEffect, useState } from 'react'

function Credits() {
    const { user } = useAuthContext();
    const [userData, setUserData] = useState<any>();

    useEffect(() => {
        user && GetUserCredits();
    }, [user])

    const GetUserCredits = async () => {
        const result = await axios.get('/api/user?email=' + user?.email);
        setUserData(result.data);
    }

    return (
        <div className='max-w-2xl mx-auto p-6 animate-fade-in'>
            <h2 className='font-bold text-3xl mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Credit Balance
            </h2>

            <div className='p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 border border-gray-100 dark:border-neutral-700 shadow-lg transition-all hover:shadow-xl'>
                <div className='flex items-center gap-6'>
                    <div className='p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl'>
                        <Coins className='h-8 w-8 text-blue-600 dark:text-blue-400' />
                    </div>
                    
                    <div>
                        <h3 className='text-sm font-medium text-gray-500 dark:text-neutral-400 mb-1'>
                            Available Credits
                        </h3>
                        <div className='flex items-baseline gap-2'>
                            <span className='text-4xl font-bold text-gray-800 dark:text-neutral-100'>
                                {userData?.credits || 0}
                            </span>
                            <span className='text-gray-500 dark:text-neutral-400'>
                                credits
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mt-6 pt-6 border-t border-gray-100 dark:border-neutral-700'>
                    <p className='text-sm text-gray-500 dark:text-neutral-400'>
                        Credits renew every month.Your existing code will be deleted in the 1st day of the every month. You can use your credits to generate code from wireframes. Each wireframe costs 1 credit.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Credits