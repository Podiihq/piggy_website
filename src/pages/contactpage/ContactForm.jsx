import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
// import CursorIcon from "../../../assets/images/illutrations/icons/cursor.svg"

export const ContactModal = ({ isOpen, setIsOpen }) => {
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.userName) formErrors.userName = 'Full Name is a required field.';
        if (!formData.email) formErrors.email = 'Email is a required field.';
        if (!validateEmail(formData.email)) formErrors.email = 'Please enter a valid email address!';


        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const sendMail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        const params = {
            userName: formData.userName,
            email: formData.email,
        };

        const serviceID = 'service_1l4l40a';
        const templateID = 'template_ed0nd89';


        emailjs
            .send(serviceID, templateID, params, {
                publicKey: '9qAe5T_Qzrs_eXzga'
            })
            .then((res) => {
                setFormData({
                    userName: '',
                    email: '',
                });
                setLoading(false);
                setSuccess(true)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-4 lg:p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#fff] border text-[#0E0E0E] p-6 md:p-10 rounded-[20px] w-full max-w-screen-sm cursor-default relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <div className="flex flex-col">
                                <h3 className="text-3xl md:text-5xl font-bold mb-2 awsome-bold">
                                    Join Waiting List
                                </h3>
                                <p>Be the first to try Piigy Points — Making Everyday Habits Fun for Kids.</p>
                                <div className="mt-8">
                                    <form id="contact_form" className="space-y-4" onSubmit={sendMail}>
                                        <div className="space-y-2">
                                            <label htmlFor="UserName" className="text-lg">Your Full Name *</label>
                                            <input
                                                value={formData.userName}
                                                onChange={handleChange}
                                                type="text" name="userName" id="userName" placeholder="First Last"
                                                className="w-full p-3.5 text-base border border-[#3d3d3d] rounded-xl" />
                                            {errors.userName && <div className="error-message text-red-500">{errors.userName}</div>}
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-lg">Your Email *</label>
                                            <input
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email" name="email" id="email" placeholder="email@email.com"
                                                className="w-full p-3.5 text-base border border-[#3d3d3d] rounded-xl" />
                                            {errors.email && <div className="error-message text-red-500">{errors.email}</div>}
                                        </div>
                                        <div className="flex gap-4 w-full">
                                            <button
                                                type="submit"
                                                id="loaderButton"
                                                className="relative px-6 py-2 w-full lg:px-8 lg:py-3.5 text-black font-bold rounded-full bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] hover:from-[#4F8DA1] hover:to-[#9AC7D5] transform hover:scale-105 transition-all duration-300">
                                                <span className="absolute inset-0 bg-gradient-to-r via-[#5BA4BB] from-[#9AC7D5] to-[#4F8DA1] opacity-75 blur-sm rounded-full"></span>
                                                <p className="relative z-10 uppercase">Submit</p>
                                                {loading && (
                                                    <div id="loader" className="absolute inset-0 items-center justify-center flex">
                                                        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                                                    </div>
                                                )}

                                            </button>
                                            <div onClick={() => setIsOpen(false)}
                                                className="cursor-pointer flex items-center text-white gap-2 bg-[#121212] hover:bg-[#0e0e0e] px-8 border border-[#3d3d3d] rounded-full">
                                                <span> Cancel</span>
                                            </div>
                                        </div>
                                        {success && (
                                            <div className="mt-4 text-green-600 leading-none text-sm">
                                                Form submitted successfully! <br /> Thanks for reaching out 🥳🥳! You’ll be the first to know when the app goes live!
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};