import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

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

    return (
        <section id="contact" className="w-full py-20 bg-[#1f242d]">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
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
                                className="w-full bg-gradient-to-r from-[#4a7dff] to-[#6a5acd] text-white font-semibold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    "Send Message"
                                )}
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
                            <h4 className="text-white font-medium mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                {[
                                    { icon: <FaGithub />, color: "text-gray-300 hover:text-white", href: "#" },
                                    { icon: <FaLinkedin />, color: "text-blue-400 hover:text-blue-500", href: "#" },
                                    { icon: <FaTwitter />, color: "text-blue-400 hover:text-blue-500", href: "#" },
                                    { icon: <FaFacebook />, color: "text-blue-400 hover:text-blue-500", href: "#" }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-2xl ${social.color} transition-colors`}
                                        whileHover={{ y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;