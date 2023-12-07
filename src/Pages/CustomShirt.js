import React from "react";
// import navbar
import Navbar from "../Components/Navbar";
// import footer
import Footer from "../Components/Footer";
// import images
import ShirtHero from "../Components/Img/shirt-hero.PNG";
import ShirtCustomize from "../Components/Img/shirt-customize.PNG";
import ShirtColor from "../Components/Img/shirt-color.PNG";
import ShirtFile from "../Components/Img/shirt-file.PNG";

const CustomShirt = () => {
    return (
        <div>
            <Navbar />
            <div className="container min-h-screen p-4 mt-[60px] mb-12 mx-auto">
                <h1 className="text-5xl text-dark-blue font-bold">Custom Shirt</h1>
                <p className="lg:w-[75ch] mt-4">
                    This is an independent case study, created to explore React Three Fiber and its interactivity with the user. In this app, the user can change the color of the
                    shirt, upload their own files, and also generate an AI logo or texture.
                </p>
                <div className="mt-4 flex items-center justify-start">
                    <a href="https://github.com/jennagmclaughlin/CustomShirt" title="View on GitHub Pages" target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-tr from-pink to-blue hover:from-dark-blue hover:to-dark-blue hover:text-white rounded py-2 px-6 mr-6 transition-all duration-200">
                            View GitHub Repository
                        </button>
                    </a>
                </div>

                {/* Programs used */}
                <h3 className="mt-8 text-3xl font-semibold">Frameworks and Packages Used</h3>
                <ul className="mt-2">
                    <li>React Three Fiber</li>
                    <li>Framer Motion</li>
                    <li>Maath</li>
                    <li>Nodemon</li>
                </ul>

                {/* Code */}
                <h3 className="mt-8 text-3xl font-semibold">Code</h3>
                <h6 className="mt-4">Home page</h6>
                <img src={ShirtHero} alt="Home page" className="w-full lg:w-[600px] mt-2" />
                <h6 className="mt-4">Customizer</h6>
                <img src={ShirtCustomize} alt="Customizer" className="w-full lg:w-[600px] mt-2" />
                <h6 className="mt-4">Color Picker</h6>
                <img src={ShirtColor} alt="Color Picker" className="w-full lg:w-[600px] mt-2" />
                <h6 className="mt-4">Uploaded File</h6>
                <img src={ShirtFile} alt="Uploaded File" className="w-full lg:w-[600px] mt-2" />
            </div>
            <Footer />
        </div>
    );
};

export default CustomShirt;
