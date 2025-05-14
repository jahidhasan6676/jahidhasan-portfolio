import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [detailsData, setDetailsData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get("/projects.json");
                const project = res.data.find(item => item._id === parseInt(id));
                setDetailsData(project);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4a7dff]"></div>
            </div>
        );
    }

    if (!detailsData) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-white">
                <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
                <button 
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 bg-[#4a7dff] rounded-md hover:bg-[#3a6bef] transition-colors"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-11/12 lg:w-10/12 mx-auto py-20">
            <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-[#4a7dff] hover:text-white mb-8 transition-colors">
                <FaArrowLeft /> Back to Projects
            </button>

            {/* Project Header */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{detailsData.heading}</h1>
                <div className="w-20 h-1 bg-[#4a7dff] mb-6"></div>
            </motion.div>

            {/* Project Image */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-12 rounded-xl overflow-hidden">
                <img 
                    src={detailsData.image} 
                    alt={detailsData.heading} 
                    className="w-full h-auto object-cover rounded-xl hover:scale-[1.01] transition-transform duration-500"/>
            </motion.div>

            {/* Project Content */}
            <div className="flex flex-col lg:flex-row gap-8 text-white">
                {/* Main Content (Left Side) */}
                <div className="lg:w-2/3">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-[#4a7dff]">Project Overview</h2>
                        <p className="text-gray-300 leading-relaxed">{detailsData.paragraph}</p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-[#4a7dff]">Future Improvements</h2>
                        <p className="text-gray-300 leading-relaxed">{detailsData.improve}</p>
                    </motion.div>
                </div>

                {/* Sidebar Content (Right Side) */}
                <div className="lg:w-1/3">
                    {/* For MD screens only - side by side */}
                    <div className="md:flex lg:flex-col gap-6">
                        {/* Tech Stack */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="border border-[#3a404b] p-6 rounded-xl md:w-1/2 lg:w-full">
                            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {detailsData.tools.map((tool, index) => (
                                    <span 
                                        key={index}
                                        className="text-sm font-medium py-2 px-4 rounded-md bg-[#4a7dff]/10 text-[#4a7dff]">
                                        {tool.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Project Links */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="border border-[#3a404b] p-6 rounded-xl md:w-1/2 lg:w-full mt-6 md:mt-0 lg:mt-6">
                            <h3 className="text-xl font-semibold mb-4">Project Links</h3>
                            <div className="space-y-3">
                                <motion.a
                                    href={detailsData.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 bg-blue-900 hover:bg-blue-950/50 rounded-md transition-colors text-white"
                                    whileHover={{ x: 5 }}>
                                    <FiExternalLink className="text-xl" />
                                    <span>Live Project</span>
                                </motion.a>
                                
                                <motion.a
                                    href={detailsData.client}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 bg-transparent hover:bg-[#2a303c] border border-[#3a404b] rounded-md transition-colors text-gray-300 hover:text-white"
                                    whileHover={{ x: 5 }}>
                                    <FiGithub className="text-xl" />
                                    <span>Client Code</span>
                                </motion.a>
                                
                                {detailsData.server && (
                                    <motion.a
                                        href={detailsData.server}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-4 py-3 bg-transparent hover:bg-[#2a303c] border border-[#3a404b] rounded-md transition-colors text-gray-300 hover:text-white"
                                        whileHover={{ x: 5 }}>
                                        <FiGithub className="text-xl" />
                                        <span>Server Code</span>
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;

