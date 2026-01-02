"use client"
import { auth } from '@/configs/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useAuthContext } from '../provider';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function ProfileAvatar() {
    const user = useAuthContext();
    const router = useRouter();

    const handleLogout = () => {
        document.cookie = "isLoggedIn=false; path=/; max-age=0";
        signOut(auth)
            .then(() => {
                // Redirect to home page after successful sign-out
                router.replace('/');
            })
            .catch((error) => {
                // Proper error handling
                console.error("Sign out failed:", error);
                alert("Sign out failed. Please try again.");
            });
    };

    return (
        <div>
            <Popover>
                <PopoverTrigger>
                    {user?.user?.photoURL && (
                        <img 
                            src={user?.user?.photoURL} 
                            alt='profile' 
                            className='w-[35px] h-[35px] rounded-full' 
                        />
                    )}
                </PopoverTrigger>
                <PopoverContent className='w-[100px] mx-w-sm'>
                    <Button 
                        variant={'ghost'} 
                        onClick={handleLogout}
                        className='w-full'
                    >
                        Logout
                    </Button>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default ProfileAvatar;