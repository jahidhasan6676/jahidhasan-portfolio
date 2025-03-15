import React from 'react';
import aboutImage from '../../assets/about.me.png'


const About = () => {
    return (
        <div id='about' className='text-white w-11/12 lg:w-10/12 mx-auto '>
            {/* Section Title */}
            <h3 className="text-xl font-semibold text-center mb-10">
                About Me
            </h3>

            <div className='md:flex md:justify-between md:items-center md:gap-10 lg:gap-20 space-y-10 md:space-y-10'>


                <div className='flex-1 md:order-1 order-2'>

                    <p className="text-[17px] text-gray-200">Hi, I’m Jahid Hasan, a passionate   Frontend Developer who loves crafting visually appealing and user-friendly web applications. I enjoy turning ideas into reality with modern technologies like React, Tailwind CSS, and JavaScript.

                        Currently, I’m exploring backend development with Node.js to expand my skill set. Right now, I’m working on an e-commerce website, focusing on both frontend and backend to create a seamless user experience.

                        I’ve also developed several applications, including the Library Management Application, Visa Landing Application, and Product Hunt Application, which showcase my versatility in various domains.

                        Besides coding, I’m a huge cricket enthusiast! Whether it’s watching thrilling matches or playing on the field, I love the sport just as much as I love building web applications.

                        I’m always eager to learn and improve, and I’m looking forward to new challenges and collaborations. Let’s connect and create something amazing together!</p>
                </div>

                <div className='flex justify-center items-center'>
                    <img src={aboutImage} className=' h-[400px] w-[300px] border-[5px] rounded-xl border-blue-600' alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;