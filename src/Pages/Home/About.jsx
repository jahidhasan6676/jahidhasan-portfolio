import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about' className='w-11/12 lg:w-10/12 mx-auto'>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mb-10"
      >
        <h2 className="text-2xl font-semibold text-white text-center ">
          About <span className='text-[#4a7dff]'>Me</span>
        </h2>
        {/* <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></div> */}
      </motion.div>

      <div className="">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="">

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="">
          <div className=" p-8 rounded-xl border border-gray-700">
            <p className="text-gray-100 text-lg leading-relaxed">
              I am a <span className='text-blue-500 font-medium'>Frontend Developer</span> focused on building clean, responsive, and user-friendly web applications. My core skills include React.js, Tailwind CSS, JavaScript, Firebase, Node.js, Express.js, and MongoDB. I have a basic understanding of Next.js and I am currently exploring both Next.js and Redux to strengthen my development workflow.
            </p>

            <p className="text-gray-100 text-lg leading-relaxed">
              I have completed several projects, including <span className='text-blue-500 font-medium'>WearHive (an e-commerce platform)</span>, <span className='text-blue-500 font-medium'>Tech Product Hunt</span>, and a team project titled <span className='text-blue-500 font-medium'>AI-Powered Healthcare Appointment System</span>. I enjoy working on both individual and collaborative projects that allow me to solve real-world problems through code.
            </p>

            <p className="text-gray-100 text-lg leading-relaxed">
              Outside of development, I have a strong interest in <span className='text-blue-400 font-medium'>cricket</span>, which helps me maintain a healthy balance between work and personal life.
            </p>

            <p className="text-gray-100 text-lg leading-relaxed">
              I believe in continuous learning and self-improvement to keep up with the evolving tech landscape. Currently, I’m looking for new challenges and collaborative opportunities where I can grow and contribute meaningfully.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;