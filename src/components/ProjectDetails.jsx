import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { FaGithub } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";


const ProjectDetails = () => {
    const { id } = useParams();
    const [detailsData, setDetailsData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/projects.json");
                const project = res.data.find(item => item._id === parseInt(id));
                setDetailsData(project);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    if (!detailsData) return <p>Loading...</p>

    console.log(detailsData)


    return (
        <div className="w-11/12 lg:w-10/12 mx-auto py-20">
            <div className="  overflow-hidden" >
                {/* image */}
                <div className="">
                    <img src={detailsData.image} alt={detailsData.heading} className="w-full h-full object-cover rounded-t-sm" />
                </div>
                {/* overview */}
                <div className=" flex flex-col gap-4 text-white pt-8">
                    <h2 className="text-2xl font-semibold ">{detailsData.heading}</h2>
                    <p className=""><span className="font-bold">Overview:</span> {detailsData.paragraph}</p>
                    <p className=""><span className="font-bold">Improve:</span> {detailsData.improve}</p>
                    <p className="font-semibold text-lg  md:flex md:items-center  gap-4">Tech Stack: <span className="flex flex-wrap gap-3 mt-2 md:mt-0">{detailsData?.tools?.map((tool, index) => (
                        <span key={index} className="text-sm font-medium border py-2 px-3 rounded-md">{tool?.name}</span>
                    ))}</span></p>
                    <div className="mt-4 flex gap-4">
                        <a href={detailsData.live} target="_blank" rel="noopener noreferrer" className="px-5 py-2 border rounded-sm border-blue-900 bg-blue-900">Live Project</a>
                        <a href={detailsData.client} target="_blank" rel="noopener noreferrer" className="px-5 py-2 flex gap-2 items-center border rounded-sm border-black hover:bg-black">Client <FiGithub className="text-xl"/> </a>

                        <a href={detailsData.server} target="_blank" rel="noopener noreferrer" className="px-5 py-2 flex gap-2 items-center border rounded-sm border-black hover:bg-black">Server <FiGithub className="text-xl"/> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;


