import { motion } from 'framer-motion';
import { FaEye, FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectsCard = ({ project }) => {
    const { image, heading, paragraph, tools, live, client, _id } = project || {};
    
    return (
        <motion.div
            className="flex flex-col w-full bg-[#1f242d] p-5 rounded-xl border border-[#3a404b] hover:border-[#4a7dff]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#4a7dff]/10 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5 }}
        >
            {/* Image with hover zoom effect */}
            <motion.div 
                className=" overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={image}
                    alt={heading}
                    className="w-full h-[200px] object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                />
               
            </motion.div>

            {/* Content */}
            <div className="flex flex-col mt-5 flex-grow">
                <h1 className="font-semibold text-xl text-white mb-2">
                    {heading.slice(0,34)}
                </h1>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {paragraph}
                </p>

                {/* Tech stack chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {tools?.slice(0, 4).map((tool, index) => (
                        <span 
                            key={index}
                            className="px-3 py-1 bg-[#4a7dff]/10 text-[#4a7dff] text-xs rounded-full">
                            {tool.name}
                        </span>
                    ))}
                    {tools?.length > 4 && (
                        <span className="px-3 py-1 bg-[#4a7dff]/10 text-[#4a7dff] text-xs rounded-full">
                            +{tools.length - 4} more
                        </span>
                    )}
                </div>

                {/* Action buttons */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#3a404b]">
                    <motion.a 
                        href={live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#4a7dff] hover:text-white transition-colors"
                        whileHover={{ x: 2 }}>
                        <FaLink className="text-base" />
                        Live Preview
                    </motion.a>
                    
                    <div className="flex items-center gap-4">
                        <motion.a 
                            href={client} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                            whileHover={{ x: 2 }}>
                            <FaGithub className="text-base" />
                            Code
                        </motion.a>
                        
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}>
                            <Link 
                                to={`/projectDetails/${_id}`}
                                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                <FaEye className="text-base" />
                                Details
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectsCard;