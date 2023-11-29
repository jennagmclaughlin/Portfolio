import React from "react";
import { Link } from "react-router-dom";
// import components
import Contact from "../Components/Contact";
import Header from "../Components/Header";
// import images
import LettieHero from "../Components/Img/lettie-hero.PNG";
import FeverHero from "../Components/Img/fever-hero.PNG";
import FigurativeHero from "../Components/Img/figurative-hero.PNG";

const Home = () => {
    return (
        <div className="bg-white w-full xl:max-h-screen xl:snap-y xl:snap-mandatory xl:overflow-y-scroll relative z-[1]">
            <Header />
            <main className="bg-white h-auto xl:min-h-screen container xl:snap-start p-4 py-12 relative mx-auto">
                <section className="w-full">
                    <h2 className="text-dark-blue font-bold text-center text-4xl md:text-6xl">Portfolio</h2>
                    {/* Portfolio row 1 */}
                    <div className="flex flex-col lg:flex-row lg:items-stretch items-center lg:justify-between gap-y-4 lg:gap-x-8 mt-6">
                        {/* Lettie's Nursery */}
                        <div className="rounded-xl w-full hover:scale-105 py-4 px-6 lg:flex-1 flex flex-col justify-center items-start card-shadow transition-transform duration-200">
                            <img src={LettieHero} alt="Lettie's Nursery" className="rounded-xl w-full h-[150px] md:h-[260px] object-cover object-top"></img>
                            <h4 className="mt-6 text-2xl font-semibold">Lettie's Nursery</h4>
                            <p className="mt-3 text-gray-800">A fully responsive, interactive plant website made with ReactJS and TailwindCSS.</p>
                            <div className="w-full mt-4 flex items-center justify-between md:justify-start">
                                <Link to={`/letties-nursery`}>
                                    <button className="bg-gradient-to-tr from-pink to-blue hover:from-dark-blue hover:to-dark-blue hover:text-white rounded py-2 px-6 md:mr-6 transition-all duration-200">
                                        Explore
                                    </button>
                                </Link>
                                <a
                                    href="https://jennagmclaughlin.github.io/Letties-Nursery/"
                                    title="View on GitHub Pages"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-500 relative after:bg-gray-500 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200"
                                >
                                    View on GitHub Pages
                                </a>
                            </div>
                        </div>
                        {/* Fever page */}
                        <div className="rounded-xl w-full hover:scale-105 py-4 px-6 lg:flex-1 flex flex-col justify-center items-start card-shadow transition-transform duration-200">
                            <img src={FeverHero} alt="Lettie's Nursery" className="rounded-xl w-full h-[150px] md:h-[260px] object-cover object-top"></img>
                            <h4 className="mt-6 text-2xl font-semibold">Fever Groups</h4>
                            <p className="mt-3 text-gray-800">A WordPress and Foundation webpage created to boost mass ticket sales.</p>
                            <div className="w-full mt-4 flex items-center justify-between md:justify-start">
                                <Link to={`/fever-groups`}>
                                    <button className="bg-gradient-to-tr from-pink to-blue hover:from-dark-blue hover:to-dark-blue hover:text-white rounded py-2 px-6 md:mr-6 transition-all duration-200">
                                        Explore
                                    </button>
                                </Link>
                                <a
                                    href="https://fever.wnba.com/groups/"
                                    title="View on fever.wnba.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-500 relative after:bg-gray-500 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200"
                                >
                                    View on fever.wnba.com
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio row 2 */}
                    <div className="flex flex-col lg:flex-row lg:items-stretch items-center lg:justify-between gap-y-4 lg:gap-x-8 mt-6">
                        <div className="rounded-xl w-full hover:scale-105 py-4 px-6 lg:flex-1 flex flex-col justify-center items-start card-shadow transition-transform duration-200">
                            <img src={FigurativeHero} alt="Lettie's Nursery" className="rounded-xl w-full h-[150px] md:h-[260px] object-cover object-top"></img>
                            <h4 className="mt-6 text-2xl font-semibold">Figurative Language</h4>
                            <p className="mt-3 text-gray-800">A group collaboration on an educational app targeted towards young children made with Bootstrap.</p>
                            <div className="w-full mt-4 flex items-center justify-between md:justify-start">
                                <Link to={`/figurative`}>
                                    <button className="bg-gradient-to-tr from-pink to-blue hover:from-dark-blue hover:to-dark-blue hover:text-white rounded py-2 px-6 md:mr-6 transition-all duration-200">
                                        Explore
                                    </button>
                                </Link>
                                <a
                                    href="https://tressymac.github.io/CIT-31200-CLIENT-GROUP_PROJECT/index.html"
                                    title="View on GitHub Pages"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-500 relative after:bg-gray-500 after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200"
                                >
                                    View on GitHub Pages
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Contact />
        </div>
    );
};

export default Home;
