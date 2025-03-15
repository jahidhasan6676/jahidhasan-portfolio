import { useState } from "react";
import {NavLink } from "react-router-dom";

// bg-[#1f242d]

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav  className="py-5 text-white w-full bg-[#1f242d]">

            <div className="w-11/12 lg:w-10/12 mx-auto md:flex md:justify-between md:items-center ">
                {/* logo and name */}
                <div className="flex justify-between items-center">
                    <div className=" text-2xl font-semibold flex items-center cursor-pointer">

                        <h2 className="text-3xl font-semibold text-blue-500"><i>JahidHasan</i><span className="text-white">.</span></h2>

                    </div>
                    <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer text-3xl ">
                        <ion-icon name={open ? "close" : "menu"}></ion-icon>
                    </div>
                </div>
                {/* page name */}
                
                    <ul className={`md:flex md:items-center md:static absolute md:z-auto z-[-1] bg-[#1f242d] w-full  left-0 md:w-auto md:pb-0 pb-6 md:pl-0 pl-7 transition-all duration-500 ease-in  ${open
                        ? "top-[76px] opacity-100 "
                        : "hidden"
                        }`}>
                        <li className="mx-4 my-4 md:my-0">
                            <NavLink onClick={() => scrollToSection('home')} className="hover:text-blue-500">  Home </NavLink>
                        </li>
                        <li className="mx-4 my-4 md:my-0">
                            <NavLink onClick={() => scrollToSection('about')} className="hover:text-blue-500">About me</NavLink>
                        </li>
                        <li className="mx-4 my-4 md:my-0">
                            <NavLink onClick={() => scrollToSection('skill')} className="hover:text-blue-500">Skill</NavLink>
                        </li>
                        <li className="mx-4 my-4 md:my-0">
                            <NavLink onClick={() => scrollToSection('projects')} className="hover:text-blue-500">Projects</NavLink>
                        </li>
                        <li className="mx-4 my-4 md:my-0">
                            <NavLink onClick={() => scrollToSection('contact')} className="hover:text-blue-500">Contact</NavLink>
                        </li>
                        
                    </ul>


                    {/* btn  */}
                    <div>
                        <button className="bg-blue-900 px-4 py-3 rounded-md hidden md:flex"> <a href="/public/Resume_of_jahid_hasan.pdf" download="Resume_of_jahid_hasan.pdf">Resume</a></button>
                    </div>
                   
            </div>
        </nav>
    );
};

export default Navbar;