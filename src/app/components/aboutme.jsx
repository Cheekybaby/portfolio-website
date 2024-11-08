import Skills from "./skills";

const skill = [
    "HTML",
    "CSS",
    "JS",
    "TS",
    "React",
    "Next.js",
    "Tailwind",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "GitHub",
]

const AboutMe = () => {
    return (
        <div className="container mx-auto p-2 lg:p-4 border-white-800 border-b lg:h-screen" id="about">
            <div className="pt-20 flex flex-col items-center">
                <h1 className="font-bold text-3xl lg:text-5xl border-white-800 border-b pb-4">About Me</h1>
                <p className="pt-5 text-[#ffffff]">Here you will find more information about me, what I do, and my current skills in terms
                    programming and technology.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 lg:mt-44 gap-8">
                <div className="w-10/12">
                    <h2 className="font-semibold text-3xl border-white-800 border-b pb-4 w-64">Get to know me!</h2>
                    <p className="text-lg pt-6">
                        I am a Backend Focused Fullstack Web Developer building and managing Websites and Web Applications that leads to the 
                        success of overall product.
                    </p>
                    <p className="text-lg pt-4">
                        I have a knack for creating things, and I am always looking for new things to learn. You can always hop on to my Github to
                        see some of my work.
                    </p>
                    <p className="text-lg pt-4">
                        I am open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches 
                        my skills and experience then do not hesitate to contact me.
                    </p>
                    <button href={"#contact"} className="mt-8 bg-[#f0f0f0e0] text-black w-32 h-10 rounded font-semibold hover:bg-[#73727266] hover:text-[#f0f0f0]">Contact Me</button>
                </div>
                <div>
                    <h2 className="font-semibold text-3xl border-white-800 border-b pb-4 w-48">My Skills </h2>
                    <div className="grid grid-cols-3 gap-2 p-4 pl-0">
                        {
                            skill.map((skill, index) => {
                                return (
                                    <Skills
                                        key={index}
                                        skill={skill}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;