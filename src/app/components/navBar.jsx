import React from "react";
import Link from "next/link";
import NavLink from "./navLink";

const navLink = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]
const NavBar = () => {
    return (
        <nav className="border-white-800 border-b fixed z-10 w-full opacity-100 bg-[#0f0f0f]">
            <div className="flex flex-wrap items-center justify-between mx-auto p-2 lg:p-4">
                <Link href={"/"} className="text-2xl text-[#ffffff] font-semibold hover:text-[#f0f0f0]">SHASHANK RANJAN</Link>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLink.map((link, index) => {
                                return (
                                    <NavLink
                                        key={index}
                                        href={link.path}
                                        title={link.title}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;