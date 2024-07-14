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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Doctors, GenderOptions, IdentificationTypes, InsuranceProviders } from "@/constants";
import { Label } from "../ui/label";
import { SelectItem } from "../ui/select";
import Image from "next/image";
import FileUploader from "../FileUploader";

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
                                <RadioGroup
                                    className='flex h-11 gap-6 xl:justify-between'
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    {GenderOptions.map((option) => (
                                        <div key={option} className='radio-group'>
                                            <RadioGroupItem value={option} id={option} />
                                            <Label htmlFor={option} className='cursor-pointer'>
                                                {option}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </div>

                <div className='flex flex-col gap-6 xl:flex-row'>
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name='address'
                        label='Address'
                        placeholder='14th Osei Tutu II Street, Kumasi'
                    />

                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name='occupation'
                        label='Occupation'
                        placeholder='Civil Servant'
                    />
                </div>
                <div className='flex flex-col gap-6 xl:flex-row'>
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name='emergencyContactName'
                        label='Emergency Contact Name'
                        placeholder="Guardian's Name"
                        iconSrc='/assets/icons/user.svg'
                        iconAlt='emergency contact name'
                    />

                    <CustomFormField
                        fieldType={FormFieldType.PHONE_INPUT}
                        control={form.control}
                        name='emergencyPhoneNumber'
                        label='Emergency Phone Number'
                        placeholder='+233 12 345 6789'
                    />
                </div>

                <section className='space-y-6'>
                    <div className='mb-9 space-y-1'>
                        <h2 className='sub-header'>Medical Information</h2>
                    </div>
                </section>

                <CustomFormField
                    fieldType={FormFieldType.SELECT}
                    control={form.control}
                    name='primaryPhysician'
                    label='Primary Physician'
                    placeholder='select a Physician'
                >
                    {Doctors.map((doctor) => (
                        <SelectItem key={doctor.name} value={doctor.name}>
                            <div className='flex cursor-pointer items-center gap-2'>
                                <Image
                                    src={doctor.image} width={32} height={32} alt={doctor.name}
                                    className='rounded-full border border-dark-500'
                                />

                                <p>{doctor.name}</p>
                            </div>
                        </SelectItem>
                    ))}
                </CustomFormField>

                <div className='flex flex-col gap-6 xl:flex-row'>
                    {/* <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name='insuranceProvider'
                        label='Insurance Provider'
                        placeholder='NHIS'
                    /> */}
                    <CustomFormField
                        fieldType={FormFieldType.SELECT}
                        control={form.control}
                        name='insuranceProvider'
                        label='Insurance Provider'
                        placeholder='Select insurance provider'
                    >
                        {InsuranceProviders.map((provider) => (
                            <SelectItem key={provider.name} value={provider.name}>
                                <div className='flex cursor-pointer items-center gap-2'>
                                    <Image
                                        src={provider.logo} width={32} height={32} alt={provider.name}
                                        className='rounded-full border border-dark-500'
                                    />

                                    <p>{provider.name}</p>
                                </div>
                            </SelectItem>
                        ))}
                    </CustomFormField>

                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name='insurancePolicyNumber'
                        label='Insurance Policy Number'
                        placeholder='1234567890'
                    />
                </div>
                <div className='flex flex-col gap-6 xl:flex-row'>
                    <CustomFormField
                        fieldType={FormFieldType.TEXTAREA}
                        control={form.control}
                        name='allergies'
                        label='Allergies (if any)'
                        placeholder='Peanuts, Penicillin, Pollen'
                    />

                    <CustomFormField
                        fieldType={FormFieldType.TEXTAREA}
                        control={form.control}
                        name='currentMedication'
                        label='Current Medication (if any)'
                        placeholder='Ibuprofen, 200mg Paracetamol, 500mg'
                    />
                </div>
                <div className='flex flex-col gap-6 xl:flex-row'>
                    <CustomFormField
                        fieldType={FormFieldType.TEXTAREA}
                        control={form.control}
                        name='familyMedicalHistory'
                        label='Family Medical History'
                        placeholder='Mother had a brain cancer, Father had heart disease'
                    />

                    <CustomFormField
                        fieldType={FormFieldType.TEXTAREA}
                        control={form.control}
                        name='pastMedicalHistory'
                        label='Past Medical History'
                        placeholder='Appendectomy, Tonsillectomy'
                    />
                </div>

                <section className='space-y-6'>
                    <div className='mb-9 space-y-1'>
                        <h2 className='sub-header'>Identification and Verification</h2>
                    </div>
                </section>

                <CustomFormField
                    fieldType={FormFieldType.SELECT}
                    control={form.control}
                    name='identificationType'
                    label='Identification Type'
                    placeholder='select an Identification Type'
                >
                    {IdentificationTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                            {type}
                        </SelectItem>
                    ))}
                </CustomFormField>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name='identificationNumber'
                    label='Identification Number'
                    placeholder="1234567890"
                />

                <CustomFormField
                    fieldType={FormFieldType.SKELETON}
                    control={form.control}
                    name='identificationDocument'
                    label='Scanned copy of identification document'
                    renderSkeleton={(field) => (
                        <FormControl>
                            <FileUploader files={field.value} onChange={field.onChange} />
                        </FormControl>
                    )}
                />
                <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
            </form>
        </Form>
    )
}

export default RegisterForm;