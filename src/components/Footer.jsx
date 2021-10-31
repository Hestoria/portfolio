import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { useForm } from "react-hook-form";

const Footer = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const sendEmail = (e) => {
        e.preventDefault();
        window.alert("Thanks for your message! I will reply you as soon as possible.");
        // emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current,process.env.REACT_APP_EMAIL_USER_ID)
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
        e.target.reset();
    }

    return (
        <div className="footer border-t-2 border-purple-600 dark:border-purple-50 bg-white dark:bg-purple-900">
            <div className="container md-auto h-full justify-center items-center">
                {/* <p className="text-xl md:text-2xl font-bold text-center p-4 col-span-2 dark:text-white">Contact ME</p>
                <p className="text-xl md:text-2xl font-bold text-center p-4 dark:text-white">+1 778 317 0653</p>
                <p className="text-xl md:text-2xl font-bold text-center p-4 dark:text-white">sam.252787@hotmail.com</p> */}
                <p className="text-xl md:text-2xl font-bold text-center p-4 dark:text-white">Get In Touch</p>
                <form onSubmit={handleSubmit(sendEmail)} className="font-bold text-center p-4 flex flex-col items-center dark:bg-white bg-purple-600 rounded">
                    <div className="footer-from"><label className="footer-from-title">Name</label></div>
                    <div className="footer-from"><input type="text" {...register('name',{ required: true })} placeholder="Name" className="footer-from-input"/></div>
                    <div className="footer-from">{errors.message && <p className="text-red-400 dark:text-red-600">This field is required</p>}</div>
                    <div className="footer-from"><label className="footer-from-title">Email</label></div>
                    <div className="footer-from"><input type="email"  {...register('email',{ required: true })} placeholder="Email" className="footer-from-input" /></div>
                    <div className="footer-from">{errors.message && <p className="text-red-400 dark:text-red-600">This field is required</p>}</div>
                    <div className="footer-from"><label className="footer-from-title">Message</label></div>
                    <div className="footer-from"><textarea placeholder="Message" {...register('message',{ required: true })} className="footer-from-input" /></div>
                    <div className="footer-from">{errors.message && <p className="text-red-400 dark:text-red-600">This field is required</p>}</div>
                    <div className="footer-from">
                        <button type="submit" value="Send" className="font-bold rounded-2xl px-4 py-2 transition duration-500 ease-in-out uppercase
                        dark:bg-purple-600 dark:text-purple-50 dark:hover:ring-purple-600 bg-white text-purple-600 hover:ring-2 hover:ring-white">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Footer
