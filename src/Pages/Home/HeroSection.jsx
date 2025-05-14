import React from 'react';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import profile3 from "../../assets/profile3.png";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram, FaDownload } from "react-icons/fa";

const HeroSection = () => {
    const socialLinks = [
        { icon: <FaFacebook />, url: "https://www.facebook.com/jm.jahid.hasan.392854"},
        { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/md-jahid-hasan6676"},
        { icon: <FaTwitter />, url: "#" },
        { icon: <FaInstagram />, url: "#" }
    ];

    return (
        <section id="home" className="w-11/12 lg:w-10/12 mx-auto py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-10">
                {/* Text Content */}
                <motion.div
                    className="space-y-6 md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}>
                    <div className="space-y-4">
                        <motion.h2
                            className="text-xl text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}>
                            Hi, Myself <p className="text-3xl mt-1 font-semibold text-blue-500">Jahid Hasan</p>
                        </motion.h2>

                        <motion.div
                            className="text-xl flex text-white  md:justify-start items-center  gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}> And I'm a
                            <span className="text-[20px] sm:text-2xl md:text-3xl text-blue-500"><Typewriter
                                options={{
                                    strings: ["Frontend Developer", "Web Developer", "React Developer"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 30
                                }}
                            /></span>
                        </motion.div>

                        <motion.p
                            className="text-gray-300 md:max-w-lg leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            I specialize in crafting interactive, responsive, and user-friendly web interfaces. Passionate about frontend development, I turn ideas into visually stunning digital experiences.
                        </motion.p>
                    </div>

                    {/* Social Links */}
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
                    
                    {/* Download Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <motion.a
                            href="/public/Resume_of_jahid_hasan.pdf"
                            download="Resume_of_jahid_hasan.pdf"
                            className="group relative inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-medium overflow-hidden bg-blue-900 transition-all duration-500 "
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Left-to-right fill animation using ::before */}
                            <span className="absolute inset-0 before:absolute before:inset-0 before:bg-blue-950/50 before:origin-left before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-1000 before:z-0 rounded-lg" />

                            {/* Content above background */}
                            <a className="relative z-10 flex items-center gap-2"
                                href='/public/Resume_of_jahid_hasan_Frontend_Developer.pdf'
                                download="Resume_of_jahid_hasan_Frontend_Developer.pdf"
                            >
                                <FaDownload className="" />
                                Download Resume
                            </a>
                            {/* transition-transform group-hover:-translate-y-0.5 */}
                        </motion.a>
                    </motion.div>


                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="relative">
                    {/* w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        {/* Main profile image */}
                        <motion.img
                            src={profile3}
                            alt="Jahid Hasan"
                            className="w-full h-full object-cover rounded-full border-4 border-[#4a7dff] p-1 z-10 relative"
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 6,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Rotating border */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#4a7dff] border-r-[#4a7dff] z-0"
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                duration: 8,
                                ease: "linear"
                            }}
                        />

                        {/* Tech badges positioned perfectly at 4 corners */}
                        <motion.div
                            className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#1f242d] text-[#4a7dff] text-xs font-bold px-3 py-1 rounded-full border border-[#4a7dff] z-20 shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4, type: "spring" }}
                            whileHover={{ scale: 1.2, backgroundColor: "#4a7dff", color: "white" }}
                        >
                            React
                        </motion.div>

                        <motion.div
                            className="absolute top-1/2 -right-2 -translate-y-1/2 bg-[#1f242d] text-[#4a7dff] text-xs font-bold px-3 py-1 rounded-full border border-[#4a7dff] z-20 shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6, type: "spring" }}
                            whileHover={{ scale: 1.2, backgroundColor: "#4a7dff", color: "white" }}
                        >
                            JS
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#1f242d] text-[#4a7dff] text-xs font-bold px-3 py-1 rounded-full border border-[#4a7dff] z-20 shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                            whileHover={{ scale: 1.2, backgroundColor: "#4a7dff", color: "white" }}
                        >
                            CSS
                        </motion.div>

                        <motion.div
                            className="absolute top-1/2 -left-2 -translate-y-1/2 bg-[#1f242d] text-[#4a7dff] text-xs font-bold px-3 py-1 rounded-full border border-[#4a7dff] z-20 shadow-lg"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1, type: "spring" }}
                            whileHover={{ scale: 1.2, backgroundColor: "#4a7dff", color: "white" }}
                        >
                            Node
                        </motion.div>

                        {/* Pulsing glow effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-[#4a7dff] z-0"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;