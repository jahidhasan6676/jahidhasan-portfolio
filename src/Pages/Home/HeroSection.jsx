import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import profile3 from "../../assets/profile3.png";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div id="home" className='w-11/12 lg:w-10/12 mx-auto md:flex md:justify-between  py-20 space-y-10 md:space-y-0'>
            {/* text part */}
            <div className="space-y-6  ">
                <div className='space-y-3 text-white  md:text-start'>
                    <h2 className="text-lg">Hi, Myself <br /> <span className="text-3xl font-semibold text-blue-500">Jahid Hasan</span></h2>
                    <h4 className=" text-xl flex  md:justify-start items-center  gap-2">And I'm a <span className="text-2xl md:text-3xl text-blue-500">
                        <Typewriter 
                            options={{
                                strings: ["Frontend Developer"],
                                autoStart: true,
                                loop: true,
                                delay: 50
                            }}
                        />
                    </span></h4>
                    <p className="md:max-w-md lg:max-w-xl text-sm text-gray-200 font-medium">I specialize in crafting interactive, responsive, and user-friendly web interfaces. Passionate about frontend development, I turn ideas into visually stunning digital experiences. Let’s build something amazing together!</p>

                </div>
                {/* www.linkedin.com/in/jm-jahid-hasan */}
                {/* social links */}
                <div className='space-x-5 text-white  md:text-start'>
                    <button className='border text-[#0D47A1] hover:text-white border-[#0D47A1]  p-[10px] rounded-full hover:bg-[#0D47A1] hover:shadow-[0px_0px_10px_#0D47A1]'><a href="https://www.facebook.com/jm.jahid.hasan.392854?mibextid=ZbWKwL "><i class="fa-brands fa-facebook flex justify-center items-center w-[8px] h-[8px]"></i></a></button>
                    <button className='border text-[#0D47A1] hover:text-white border-[#0D47A1]  p-[10px] rounded-full hover:bg-[#0D47A1] hover:shadow-[0px_0px_10px_#0D47A1]'><a href="https://www.linkedin.com/in/jm-jahid-hasan/"><i class="fa-brands fa-linkedin-in flex justify-center items-center w-[8px] h-[8px]"></i></a></button>
                    <button className='border text-[#0D47A1] hover:text-white border-[#0D47A1]  p-[10px] rounded-full hover:bg-[#0D47A1] hover:shadow-[0px_0px_10px_#0D47A1]'><i class="fa-brands fa-twitter flex justify-center items-center w-[8px] h-[8px]"></i></button>
                    <button className='border text-[#0D47A1] hover:text-white border-[#0D47A1]  p-[10px] rounded-full hover:bg-[#0D47A1] hover:shadow-[0px_0px_10px_#0D47A1]'><i class="fa-brands fa-instagram flex justify-center items-center w-[8px] h-[8px]"></i></button>
                </div>

                <div className=' md:text-start'>
                    <button className='bg-blue-900 px-4 py-3 rounded-md text-white '><a href="/public/Resume_of_jahid_hasan.pdf" download="Resume_of_jahid_hasan.pdf">Download Resume</a></button>
                </div>

            </div>
            {/* image part */}
            <div className='flex justify-center'>
                <motion.img 
                        src={profile3} 
                        alt="" 
                        className="h-[300px] w-[300px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] rounded-full bg-blue-900" 
                        animate={{ y: [0, -20, 0] }} 
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    />
            </div>
        </div>
    );
};

export default HeroSection;