import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id='about' className='w-11/12 lg:w-10/12 mx-auto py-20'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#1f242d] rounded-xl p-8 md:p-10 shadow-2xl border border-[#3a404b]">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white">
                        About <span className="text-[#4a7dff]">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#4a7dff] mx-auto mt-3"></div>
                </div>

                {/* Content */}
                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                        Hi, I'm <span className="text-[#4a7dff] font-medium">Jahid Hasan</span>, a passionate <span className="text-white">Frontend Developer</span> who loves crafting visually appealing and user-friendly web applications. I enjoy turning ideas into reality with modern technologies like <span className="text-[#4a7dff]">React</span>, <span className="text-[#4a7dff]">Tailwind CSS</span>, and <span className="text-[#4a7dff]">JavaScript</span>.
                    </p>

                    <p>
                        Currently, I'm exploring <span className="text-[#4a7dff]">backend development</span> with <span className="text-white">Node.js</span> to expand my skill set. Right now, I'm working on an <span className="text-[#4a7dff]">e-commerce website</span>, focusing on both frontend and backend to create a seamless user experience.
                    </p>

                    <div className="bg-[#2a303c] p-5 rounded-lg border-l-4 border-[#4a7dff]">
                        <h3 className="text-xl font-semibold mb-3 text-[#4a7dff]">My Projects</h3>
                        <ul className="space-y-2 list-disc list-inside marker:text-[#4a7dff]">
                            <li><span className="text-white">Library Management Application</span></li>
                            <li><span className="text-white">Visa Landing Application</span></li>
                            <li><span className="text-white">Product Hunt Application</span></li>
                        </ul>
                    </div>

                    <p>
                        Besides coding, I'm a huge <span className="text-[#4a7dff]">cricket enthusiast</span>! Whether it's watching thrilling matches or playing on the field, I love the sport just as much as I love building web applications.
                    </p>

                    <div className="pt-4 text-center">
                        <p className="text-lg font-medium">
                            I'm always eager to learn and improve. <span className="text-[#4a7dff]">Let's create something amazing together!</span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;