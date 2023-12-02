import React from "react";
// import navbar
import Navbar from "../Components/Navbar";
// import footer
import Footer from "../Components/Footer";
// import images
import FeverHero from "../Components/Img/fever-hero.PNG";
import FeverPackages from "../Components/Img/fever-packages.PNG";
import FeverTeam from "../Components/Img/fever-team.PNG";
import FeverFAQ from "../Components/Img/fever-faq.PNG";

const FeverGroups = () => {
    return (
        <div>
            <Navbar />
            <div className="container min-h-screen p-4 mt-[60px] mb-12 mx-auto">
                <h1 className="text-5xl text-dark-blue font-bold">Fever Groups</h1>
                <p className="lg:w-[75ch] mt-4">
                    This page was asked to be created by Pacers Sports & Entertainment for the Fever website. It was created using WordPress and Foundation.
                </p>
                <div className="mt-4 flex items-center justify-start">
                    <a href="https://fever.wnba.com/groups/" title="View on fever.wnba.com" target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-tr from-pink to-blue hover:from-dark-blue hover:to-dark-blue hover:text-white rounded py-2 px-6 mr-6 transition-all duration-200">
                            View on fever.wnba.com
                        </button>
                    </a>
                </div>

                {/* Programs used */}
                <h3 className="mt-8 text-3xl font-semibold">Programs Used</h3>
                <ul className="mt-2">
                    <li>WordPress</li>
                    <li>Visual Studio Code (Foundation)</li>
                </ul>

                {/* Code */}
                <h3 className="mt-8 text-3xl font-semibold">Code</h3>
                <p className="lg:w-[75ch] mt-4">Since the wireframes and assets were provided to me, all I had to do was code.</p>
                <h6 className="mt-4">Hero</h6>
                <img src={FeverHero} alt="Hero" className="w-full lg:w-[600px] mt-2" />
                <h6 className="mt-4">Packages</h6>
                <img src={FeverPackages} alt="Packages" className="w-full lg:w-[600px] mt-2" />
                <h6 className="mt-4">Team</h6>
                <img src={FeverTeam} alt="Team" className="w-full lg:w-[600px] mt-2" />
                <h6 className="mt-4">FAQ</h6>
                <img src={FeverFAQ} alt="FAQ" className="w-full lg:w-[600px] mt-2" />
            </div>
            <Footer />
        </div>
    );
};

export default FeverGroups;
