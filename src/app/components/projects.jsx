import React from "react";

const Projects = () => {
    return (
        <>
            <div className="flex flex-col lg:h-screen border-white-800 border-b pb-16 lg:pb-0" id="projects">
                <div className="pt-20 flex flex-col items-center">
                    <h1 className="text-3xl lg:text-5xl border-white-800 border-b pb-4 font-semibold">Projects</h1>
                    <p className="pt-5 text-[#ffffff] text-lg pl-4 pr-4">Here you will find some of my projects that I've worked on in my free time.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-8 ml-24 mr-24">
                    <div>
                        Project1
                    </div>
                    <div>
                        Project2
                    </div>
                    <div>
                        Project3
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;