import React from "react";
// import navbar
import Navbar from "../Components/Navbar";
// import footer
import Footer from "../Components/Footer";
// import images
import LettiePersona from "../Components/Img/lettie-persona.png";
import LettieJourney from "../Components/Img/lettie-journey.png";
import LettieTypography from "../Components/Img/lettie-typography.PNG";
import LettieColors from "../Components/Img/lettie-colors.PNG";
import LettieSketches from "../Components/Img/lettie-sketches.PNG";
import LettieLogo from "../Components/Img/lettie-logo.png";
import LettieNavigation from "../Components/Img/lettie-navigation.png";
import LettieWireframes from "../Components/Img/lettie-wireframes.PNG";
import LettieHero from "../Components/Img/lettie-hero.PNG";
import LettieProducts from "../Components/Img/lettie-products.PNG";
import LettieCart from "../Components/Img/lettie-cart.PNG";

const LettiesNursery = () => {
    return (
        <div>
            <Navbar />
            <div className="container p-4 mt-[60px] mb-12 mx-auto">
                <h1 className="text-5xl text-dark-blue font-bold">Lettie's Nursery</h1>
                <p className="lg:w-[75ch] mt-4">Lettie's Nursery is an online plant store dedicated to selling indoor plants that are non-toxic to both dogs and cats.</p>
                <p className="lg:w-[75ch] mt-4">
                    This case study explores the brand creation process, including the typography, colors, logo, and website creation using ReactJS and TailwindCSS.
                </p>
                <div className="mt-4 flex items-center justify-start">
                    <a href="https://jennagmclaughlin.github.io/Letties-Nursery/" title="View on GitHub Pages" target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-tr from-pink to-blue hover:from-dark-blue hover:to-dark-blue hover:text-white rounded py-2 px-6 mr-6 transition-all duration-200">
                            View on GitHub Pages
                        </button>
                    </a>
                    <a
                        href="https://github.com/jennagmclaughlin/Letties-Nursery"
                        title="View on GitHub Pages"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 relative after:bg-gray-500 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200"
                    >
                        View GitHub Repository
                    </a>
                </div>

                {/* Programs used */}
                <h3 className="mt-8 text-3xl font-semibold">Programs Used</h3>
                <ul className="mt-2">
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe InDesign</li>
                    <li>Figma</li>
                    <li>Visual Studio Code (ReactJS and TailwindCSS)</li>
                </ul>

                {/* Target audience */}
                <h3 className="mt-8 text-3xl font-semibold">Step 1: Target Audience</h3>
                <p className="lg:w-[75ch] mt-4">
                    The target audience would primarily be pet parents located in the United States, as this is a US-based company. Due to online research and surveys, I was able
                    to find the following information:
                    <ul className="pl-8 mt-2 list-disc">
                        <li>Majority (30%) are between 25-34 years old</li>
                        <li>77% identify as female</li>
                        <li>Majority have some form of higher education</li>
                    </ul>
                </p>
                <h6 className="mt-4">User Persona</h6>
                <img src={LettiePersona} alt="Persona" className="w-full lg:w-[600px] mt-2" />
                <h6 className="mt-4">User Journey</h6>
                <img src={LettieJourney} alt="User Journey" className="w-full lg:w-[600px] mt-2" />

                {/* Typography and Colors */}
                <h3 className="mt-8 text-3xl font-semibold">Step 2: Typography and Colors</h3>
                <h6 className="mt-2">Typography Guide</h6>
                <img src={LettieTypography} alt="Typography" className="w-full lg:w-[600px] mt-2" />
                <h6 className="mt-4">Colors Guide</h6>
                <img src={LettieColors} alt="Colors" className="w-full lg:w-[600px] mt-2" />

                {/* Logo creation */}
                <h3 className="mt-8 text-3xl font-semibold">Step 3: Logo Creation</h3>
                <h6 className="mt-2">Logo sketches</h6>
                <img src={LettieSketches} alt="Logo Sketches" className="w-full lg:w-[600px]" />
                <h6>Final logo</h6>
                <img src={LettieLogo} alt="Logo" className="w-full lg:w-[600px]" />

                {/* Navigation Chart and Wireframes */}
                <h3 className="mt-8 text-3xl font-semibold">Step 4: Navigation Chart and Wireframes</h3>
                <h6 className="mt-2">Navigation chart</h6>
                <img src={LettieNavigation} alt="Navigation chart" className="w-full lg:w-[600px]" />
                <h6 className="mt-4">Wireframes</h6>
                <img src={LettieWireframes} alt="Wireframes" className="w-full lg:w-[600px]" />

                {/* Code */}
                <h3 className="mt-8 text-3xl font-semibold">Step 5: Code</h3>
                <div className="mt-4 flex items-center justify-start">
                    <a href="https://jennagmclaughlin.github.io/Letties-Nursery/" title="View on GitHub Pages" target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-tr from-pink to-blue hover:from-dark-blue hover:to-dark-blue hover:text-white rounded py-2 px-6 mr-6 transition-all duration-200">
                            View on GitHub Pages
                        </button>
                    </a>
                    <a
                        href="https://github.com/jennagmclaughlin/Letties-Nursery"
                        title="View on GitHub Pages"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 relative after:bg-gray-500 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200"
                    >
                        View GitHub Repository
                    </a>
                </div>
                <h6 className="mt-4">Navbar and Hero</h6>
                <img src={LettieHero} alt="Navbar and Hero" className="w-full lg:w-[600px]" />
                <h6 className="mt-4">Products</h6>
                <img src={LettieProducts} alt="Products" className="w-full lg:w-[600px]" />
                <h6 className="mt-4">Cart</h6>
                <img src={LettieCart} alt="Cart" className="w-full lg:w-[600px]" />
            </div>
            <Footer />
        </div>
    );
};

export default LettiesNursery;
