import React from "react";
// import navbar
import Navbar from "../Components/Navbar";
// import footer
import Footer from "../Components/Footer";
// import images
import FigurativeHero from "../Components/Img/figurative-hero.PNG";
import FigurativeFlashcards from "../Components/Img/figurative-flashcards.PNG";

const Figurative = () => {
    return (
        <div>
            <Navbar />
            <div className="container min-h-screen p-4 mt-[60px] mb-12 mx-auto">
                <h1 className="text-5xl text-dark-blue font-bold">Fever Groups</h1>
                <p className="lg:w-[75ch] mt-4">
                    This page was a group project in one of my college courses. We were provided with the data and instructions, and simply had to code the site using Bootstrap and
                    Less CSS.
                </p>
                <div className="mt-4 flex items-center justify-start">
                    <a href="https://tressymac.github.io/CIT-31200-CLIENT-GROUP_PROJECT/index.html" title="View on GitHub Pages" target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-tr from-pink to-blue hover:from-dark-blue hover:to-dark-blue hover:text-white rounded py-2 px-6 mr-6 transition-all duration-200">
                            View on GitHub Pages
                        </button>
                    </a>
                    <a
                        href="https://github.com/Tressymac/CIT-31200-CLIENT-GROUP_PROJECT"
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
                    <li>Visual Studio Code (Bootstrap, Less CSS)</li>
                </ul>

                {/* Code */}
                <h3 className="mt-8 text-3xl font-semibold">Code</h3>
                <p className="lg:w-[75ch] mt-4">Since the assets were provided to the group, all we had to do was code.</p>
                <h6 className="mt-4">Home page</h6>
                <img src={FigurativeHero} alt="Home page" className="w-full lg:w-[600px] mt-2" />
                <h6 className="mt-4">Flashcards</h6>
                <img src={FigurativeFlashcards} alt="Flashcards" className="w-full lg:w-[600px] mt-2" />
            </div>
            <Footer />
        </div>
    );
};

export default Figurative;
