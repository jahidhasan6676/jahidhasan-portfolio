import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "57b42641-1224-433b-88ff-31ed009c3a05");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                event.target.reset();
            } else {
                setResult("Failed to send message. Please try again.");
            }
        } catch (error) {
            setResult("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setResult(""), 5000);
        }
    };

    const socialLinks = [
            { icon: <FaFacebook />, url: "https://www.facebook.com/jm.jahid.hasan.392854"},
            { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/md-jahid-hasan6676"},
            { icon: <FaTwitter />, url: "#" },
            { icon: <FaInstagram />, url: "#" }
        ];


    return (
        <section id="contact" className="w-full pb-20 bg-[#1f242d]">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <motion.h2
                    className="text-2xl font-semibold text-center mb-10 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get In <span className="text-[#4a7dff]">Touch</span>
                </motion.h2>
                

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <motion.div
                        className="bg-[#1f242d] p-6 md:p-8 rounded-xl shadow-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>

                        <form onSubmit={onSubmit} className="space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full p-4 rounded-lg bg-[#1f242d] border border-[#3a404b] text-white outline-none focus:border-[#4a7dff] transition-all"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full p-4 rounded-lg bg-[#1f242d] border border-[#3a404b] text-white outline-none focus:border-[#4a7dff] transition-all"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    className="w-full p-4 rounded-lg bg-[#1f242d] border border-[#3a404b] text-white outline-none focus:border-[#4a7dff] transition-all min-h-[150px]"
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="group relative w-full bg-blue-900 text-white font-semibold py-4 px-6 rounded-lg overflow-hidden flex justify-center items-center transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                            >
                                {/* Left to right bg fill on hover */}
                                <span className="absolute inset-0 bg-blue-950/50 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000 ease-out z-0" />

                                {/* Content on top */}
                                <span className="relative z-10 flex items-center">
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </span>
                            </motion.button>



                            {result && (
                                <motion.p
                                    className={`text-center py-2 rounded-lg ${result.includes("successfully") ? "text-green-400" : "text-red-400"}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {result}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="bg-[#1f242d] p-6 md:p-8 rounded-xl shadow-lg flex flex-col justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>

                        <div className="space-y-6">
                            <motion.div
                                className="flex items-start space-x-4"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="p-3 bg-[#4a7dff]/10 rounded-full">
                                    <FaPhone className="text-xl text-[#4a7dff]" />
                                </div>
                                <div>
                                    <h4 className="text-gray-300 text-sm">Phone</h4>
                                    <p className="text-white">+8801818186676</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start space-x-4"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="p-3 bg-[#4a7dff]/10 rounded-full">
                                    <FaEnvelope className="text-xl text-[#4a7dff]" />
                                </div>
                                <div>
                                    <h4 className="text-gray-300 text-sm">Email</h4>
                                    <p className="text-white">jh18186676@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start space-x-4"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="p-3 bg-[#4a7dff]/10 rounded-full">
                                    <FaWhatsapp className="text-xl text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-gray-300 text-sm">WhatsApp</h4>
                                    <p className="text-white">+8801818186676</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start space-x-4"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="p-3 bg-[#4a7dff]/10 rounded-full">
                                    <FaMapMarkerAlt className="text-xl text-red-400" />
                                </div>
                                <div>
                                    <h4 className="text-gray-300 text-sm">Location</h4>
                                    <p className="text-white">Cumilla, Bangladesh</p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="mt-12">
                            <h4 className="text-white font-medium mb-6 text-lg">Follow Me</h4>
                            <div className="flex justify-start space-x-6">
                                <motion.div
                                    className="flex justify-start gap-5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}>
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative p-2 rounded-full bg-[#1f242d]  text-gray-300 transition-all
                                                              border border-[#3a404b] hover:border-transparent
                                                              shadow-[0_0_0_1px_rgba(74,125,255,0.3)] hover:shadow-[0_0_0_4px_rgba(74,125,255,0.5),
                                                                        0_0_15px_5px_rgba(74,125,255,0.3)]"
                                            whileHover={{
                                                y: -5,
                                            }}
                                            whileTap={{ scale: 0.9 }}>
                                            {/* Glow effect */}
                                            <div className="absolute inset-0 rounded-full bg-[#4a7dff] opacity-0 group-hover:opacity-20 
                                                                  transition-opacity duration-300 pointer-events-none"></div>

                                            {/* Social icon with white color on hover */}
                                            <div className="relative z-10">
                                                {React.cloneElement(social.icon, {
                                                    className: "text-xl text-gray-300 group-hover:text-white transition-all duration-300"
                                                })}
                                            </div>

                                            {/* Border glow effect */}
                                            <div className="absolute inset-0 rounded-full border-2 border-transparent 
                                                                  group-hover:border-[#4a7dff]/50 pointer-events-none
                                                                  group-hover:shadow-[0_0_15px_5px_rgba(74,125,255,0.4)]"></div>
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;