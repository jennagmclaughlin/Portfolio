import React from "react";

const Contact = () => {
    return (
        <footer className="bg-dark-blue md:h-screen md:snap-start">
            <div className="container h-full py-8 px-4 flex items-center justify-start mx-auto text-white">
                <div className="w-full">
                    <h2 className="font-bold text-5xl">Let's get in touch!</h2>
                    <p className="lg:w-[75ch] mt-4">I'm open to discussion about projects or work Mo-Fri from 9-5.</p>
                    {/* Email */}
                    <h4 className="mt-6 mb-1 font-semibold text-2xl">Email</h4>
                    <a
                        href="mailto:jennagmclaughlin@gmail.com"
                        title="Email"
                        className="text-xl relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200"
                    >
                        jennagmclaughlin@gmail.com
                    </a>
                    {/* LinkedIn */}
                    <h4 className="mt-6 mb-1 font-semibold text-2xl">LinkedIn</h4>
                    <a
                        href="https://www.linkedin.com/in/jenna-g-mclaughlin/"
                        title="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-200"
                    >
                        jenna-g-mclaughlin
                    </a>
                    <div className="mt-24">Site &copy; Jenna McLaughlin 2023</div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
