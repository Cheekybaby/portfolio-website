import React from "react";
import { FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RiScrollToBottomLine } from "react-icons/ri";
import SocialLinks from "./socialLinks";


const socialLinks = [
    {
        href: "https://www.linkedin.com/in/shashank-ranjan-1347a1230/",
        icon: <FaLinkedin size={28} />,
    },
    {
        href: "mailto:shashankranjan07@gmail.com",
        icon: <BiLogoGmail size={28} />,
    },
    {
        href: "https://github.com/cheekybaby",
        icon: <FaGithub size={28} />,
    },
    {
        href: "https://twitter.com/shashankranjan07",
        icon: <FaSquareXTwitter size={28} />,
    },
]

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-1/2 lg:h-screen lg:pt-14 border-white-800 border-b">
                <h1 className="text-3xl lg:text-5xl text-[#f0f0f0a9] pt-20 font-bold">Hello, I am Shashank Ranjan</h1>
                <p className="pt-5 lg:mt-8 text-[#ffffff] w-5/6 text-center lg:w-1/4">I am a <strong>Fullstack Developer</strong>, a <strong>Data Analyst</strong>, and a <strong>Machine Learning Enthusiast</strong></p>
                <div id="socials" className="pt-5 lg:mt-8">
                    <ul className="flex pt-4 pb-4 md:p-0 flex-row">
                        {
                            socialLinks.map((link, index) => {
                                return (
                                    <SocialLinks
                                        key={index}
                                        href={link.href}
                                        icon={link.icon}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="pb-32 lg:pb-14">
                    <button className="mt-8 lg:mt-10 bg-[#f0f0f0e0] text-black w-32 h-10 rounded font-semibold hover:bg-[#73727266] hover:text-[#f0f0f0] transition ease-in-out hover:translate-y-1 hover:scale-110" href={"#projects"}>Projects</button>
                </div>
                <div className="pb-4">
                    <RiScrollToBottomLine className="animate-bounce " size={28} />
                </div>
            </div>
        </>
    );
};

export default HeroSection;
        