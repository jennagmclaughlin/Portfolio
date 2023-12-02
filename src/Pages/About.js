import React from "react";
// import navbar
import Navbar from "../Components/Navbar";
// import footer
import Footer from "../Components/Footer";

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container min-h-screen p-4 mx-auto mt-[60px] flex flex-col items-center gap-y-5 text-left">
                <p className="block max-w-[75ch]">
                    I'm Jenna McLaughlin, a front-end developer with a passion for creating unique and accessible websites. Right now I live in central Indiana and attend Purdue
                    University; I major in Computer Graphics Technology with a GPA of 3.9. I aim to graduate by mid-December 2023.
                </p>
                <p className="block max-w-[75ch]">
                    Currently, I'm working with Pacers Sports & Entertainment Inc. as a web development specialist. I create and edit their web pages to boost their revenue in
                    ticket sales and spread information about upcoming events, all to their 600,000+ fans.
                </p>
                <p className="block max-w-[75ch]">
                    Those who know me will describe me as hardworking, determined, and reliable. I can adapt to any changing scenario, and overcome any challenge thrown my way.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;
