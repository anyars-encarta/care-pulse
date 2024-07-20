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
} from "@/components/ui/alert-dialog"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PassKeyModal = () => {
    const router = useRouter();
    const [open, setOpen] = useState(true);

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
                    
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default PassKeyModal