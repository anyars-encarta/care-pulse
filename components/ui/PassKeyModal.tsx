'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PassKeyModal = () => {
    const router = useRouter();
    const [open, setOpen] = useState(true);
    const [passKey, setPassKey] = useState('');
    const [error, setError] = useState('');

    const validatePasskey = (e) => {};

    const closeModal = () => {
        setOpen(false);
        router.push('/')
    };


    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent className='shad-alert-dialog'>
                <AlertDialogHeader>
                    <AlertDialogTitle className='flex items-start justify-between'>
                        Admin Access Verification
                        <Image
                            src='/assets/icons/close.svg'
                            height={20}
                            width={20}
                            alt='close'
                            onClick={() => closeModal()}
                            className='cursor-pointer'
                        />
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        To access the admin page, please enter the passKey.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <div>
                    <InputOTP maxLength={6} value={passKey} onChange={(value) => setPassKey(value)}>
                        <InputOTPGroup className='shad-otp'>
                            <InputOTPSlot className='shad-otp-slot' index={0} />
                            <InputOTPSlot className='shad-otp-slot' index={1} />
                            <InputOTPSlot className='shad-otp-slot' index={2} />
                            <InputOTPSlot className='shad-otp-slot' index={3} />
                            <InputOTPSlot className='shad-otp-slot' index={4} />
                            <InputOTPSlot className='shad-otp-slot' index={5} />
                        </InputOTPGroup>
                    </InputOTP>

                    {error && <p className='shad-error text-14-regular mt-4 flex justify-center'>{error}</p>}
                </div>
                <AlertDialogFooter>
                    <AlertDialogAction 
                    onClick={(e) => validatePasskey(e)}
                    className='shad-primary-btn w-full'
                    >
                        Enter Admin Passkey
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default PassKeyModal