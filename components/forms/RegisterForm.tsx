import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { UserFormValidation } from "@/lib/validation";
import "react-phone-number-input/style.css";

import { Form, FormControl } from "@/components/ui/form";
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
import { FormFieldType } from "./PatientForm";
import { RadioGroup } from "../ui/radio-group";

const RegisterForm = ({ user }: { user: User }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    });

    const onSubmit = async ({ name, email, phone }: z.infer<typeof UserFormValidation>) => {
        setIsLoading(true);

        try {
            const userData = { name, email, phone };

            const user = await createUser(userData);

            if (user) router.push(`/patients/${user.$id}/register`)

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">
                <section className='space-y-4'>
                    <h1 className='header'>Welcome 👋</h1>
                    <p className='text-dark-700'>Let us know more about yourself.</p>
                </section>

                <section className='space-y-6'>
                    <div className='mb-9 space-y-1'>
                        <h2 className='sub-header'>Personal Information</h2>
                    </div>
                </section>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name='name'
                    label='Full Name'
                    placeholder='John Doe'
                    iconSrc='/assets/icons/user.svg'
                    iconAlt='user'
                />

                <div className='flex flex-col gap-6 xl:flex-row'>
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name='email'
                        label='Email'
                        placeholder='john@something.com'
                        iconSrc='/assets/icons/email.svg'
                        iconAlt='email'
                    />

                    <CustomFormField
                        fieldType={FormFieldType.PHONE_INPUT}
                        control={form.control}
                        name='phone'
                        label='Phone Number'
                        placeholder='+233 12 345 6789'
                    />
                </div>

                <div className='flex flex-col gap-6 xl:flex-row'>
                    <CustomFormField
                        fieldType={FormFieldType.DATE_PICKER}
                        control={form.control}
                        name='birthDate'
                        label='Date of Birth'
                    />

                    <CustomFormField
                        fieldType={FormFieldType.SKELETON}
                        control={form.control}
                        name='gender'
                        label='Gender'
                        renderSkeleton={(field) => (
                            <FormControl>
                                <RadioGroup>

                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </div>
                <div className='flex flex-col gap-6 xl:flex-row'>

                </div>
                <div className='flex flex-col gap-6 xl:flex-row'>

                </div>
                <div className='flex flex-col gap-6 xl:flex-row'>

                </div>
                <div className='flex flex-col gap-6 xl:flex-row'>

                </div>
                <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
            </form>
        </Form>
    )
}

export default RegisterForm;