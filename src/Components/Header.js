import React from "react";
// import navbar
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="bg-gradient-to-tl from-pink to-blue w-full min-h-[800px] h-screen md:snap-center relative z-[1]">
            <Navbar className="absolute top-0" />
            <div className="container h-full flex flex-col items-start justify-center p-4 mx-auto text-center lg:text-left">
                <h3 className="text-white text-xl mb-4 uppercase">PASSIONATE, CREATIVE, TEAM PLAYER</h3>
                <h1 className="teko700 text-white font-bold text-7xl md:text-8xl lg:text-9xl">
                    FRONT-END <br className="block md:hidden" /> DEVELOPER
                </h1>
                <h6 className="text-white uppercase">Scroll to begin</h6>
            </div>
        </header>
    );
};

export default Header;
