import React from "react";
import SocialLinks from "./socialLinks";
import { FaLinkedin, FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

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

const Footer = () => {
    return (
        <>
        <div className="bg-[#0f0f0f] flex flex-col justify-center items-center mt-10" id="footer">
            <div className="flex pt-4 pb-4 p-0 flex-row">
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
            </div>
            <div className="text-center">
                <p className="text-lg">
                    © {new Date().getFullYear()} Made by Shashank Ranjan
                </p>
            </div>
        </div>
        </>
    );
};


export default Footer;