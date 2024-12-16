'use client';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useSnackbar } from "notistack";
const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
        criteriaMode: "all"
    });
    const snackbar = useSnackbar();
    const router = useRouter();
    const details = (formData) => {
        fetch("/api/submit", { method: "POST", body: JSON.stringify(formData) }).then(response => response.json()).then(finalResponse => {
            router.push("/");
            snackbar.enqueueSnackbar(finalResponse.message, {
                variant: "success",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                },
                autoHideDuration: 2000
            })
            reset({ name: "", email: "", message: "" })
        }).catch(er => {
            console.log("error", er);
        });
    }
    return (
        <form className='flex flex-col gap-y-4' action="https://formsubmit.co/anmolgoelcs717@gmail.com" method="POST">
            <div className='relative flex items-center'>
                {<Input type='name' id='name' placeholder='Name' register={{
                    ...register("name", {
                        onChange(e) {
                        }
                    })
                }} />}
                <User className='absolute right-6' size={20} />
            </div>
            <div className='relative flex items-center'>
                <Input type='email' id='email' placeholder='Email' register={{
                    ...register("email", {
                        onChange(e) {

                        }
                    })
                }} />
                <MailIcon className='absolute right-6' size={20} />
            </div>
            <div className='relative flex items-center'>
                <Textarea placeholder='Type Your Message Here' register={{
                    ...register("message", {
                        onChange(e) {

                        }
                    })
                }} />
                <MessageSquare className='absolute top-4 right-6' size={20} />
            </div>
            <Button type={"submit"} className='flex items-center gap-x-1 max-w-[166px]'>Let's Talk
                <ArrowRightIcon size={20} />
            </Button>
        </form>
    );
};

export default Form;

