"use client"
import { auth } from '@/configs/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../provider';

function Authentication({ children, redirectOnSuccess }: { children: any, redirectOnSuccess?: string }) {
    const provider = new GoogleAuthProvider();
    const router = useRouter();
    const authContext = useAuthContext(); // Get full auth context

    const onButtonPress = () => {
        // Check if user exists in context
        if (redirectOnSuccess && authContext?.user) {
            router.push(redirectOnSuccess);
            return;
        }

        signInWithPopup(auth, provider)
            .then((result) => {
                // Maintain credential handling
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user;
                console.log("User:", user, "Token:", token);

                if (redirectOnSuccess) {
                    router.push(redirectOnSuccess);
                }
            }).catch((error) => {
                // Maintain error handling
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.error("Error:", errorCode, errorMessage);
            });
    }

    return (
        <div onClick={onButtonPress}>
            {children}
        </div>
    )
}

export default Authentication;