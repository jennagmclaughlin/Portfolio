import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full h-[60px]">
            <div className="container flex items-center justify-between p-4 mx-auto">
                <h2 className="font-bold text-xl md:text-2xl text-dark-blue hover:text-black transition-all duration-200">
                    <Link to={`/`}>
                        Jenna <br className="block md:hidden" /> McLaughlin
                    </Link>
                </h2>
                <ul className="flex items-center justify-end gap-x-6 text-sm md:text-md">
                    <li className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200">
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200">
                        <Link to={`/about`}>About</Link>
                    </li>
                    <li>
                        <a href="mailto:jennagmclaughlin@gmail.com" title="Contact">
                            <button className="bg-blue hover:bg-dark-blue rounded-xl px-4 py-2 text-black hover:text-white transition-bg duration-200">Contact</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
