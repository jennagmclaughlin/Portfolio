import React from "react";

const Timeline = () => {
    return (
        <section className="w-full">
                    <div className="flex flex-col lg:flex-row lg:items-stretch items-center lg:justify-between gap-y-4 py-4 px-6 lg:gap-x-8 mt-6">
                        <h2 className="text-dark-blue font-bold text-center text-4xl md:text-6xl lg:mr-4">Timeline</h2>
                        <ol class="relative border-s border-gray-200 dark:border-gray-700">
                            <li class="mb-10 ms-6">
                                <span class="bg-white absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <i class="fa-solid fa-user-graduate"></i>
                                </span>
                                <div className="ml-2">
                                    <h3 className="mb-1 text-lg font-semibold">Student</h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Purdue School of Engineering and Technology; August 2020 - December 2023</time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Bachelor of Science; 3.9 GPA</p>
                                </div>
                            </li>
                            <li class="mb-10 ms-6">
                                <span class="bg-white absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <i class="fa-solid fa-briefcase"></i>
                                </span>
                                <div className="ml-2">
                                    <h3 className="mb-1 text-lg font-semibold">Front-End Developer</h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Axolotl Central; January 2023 - May 2023</time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Redesigned website for a 4K+ member community to enhance their brand and increase engagement. Conducted target audience and user research to rebrand the company; analyzed the data and visualized it into comprehensive graphics. Designed and implemented cohesive style guides and user-friendly wireframes that reduced turnaround time for projects; delivered a responsive WordPress template.</p>
                                </div>
                            </li>
                            <li class="mb-10 ms-6">
                                <span class="bg-white absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <i class="fa-solid fa-basketball"></i>
                                </span>
                                <div className="ml-2">
                                    <h3 className="mb-1 text-lg font-semibold">Web Developer Specialist</h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Pacers Sports and Entertainment LLC; August 2023 - Present</time>
                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Communicate and collaborate with designers and developers to plan, write, and launch over 50 web pages using Foundation and WordPress frameworks, ensuring optimal UI and UX. Designed and launched scalable NBA All-Star event pages attracting an average of over 126K organic visitors. Boost SEO by 30% by implementing revenue-generating enhancements in ticketing pages, adhering to web design principles and ADA guidelines. Improve performance and code quality for various web projects using JavaScript, jQuery, CSS, and HTML, and provide technical support with site management.</p>
                                </div>
                            </li>    
                            {/* <li class="mb-10 ms-6">            
                                <span class="bg-white absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </span>
                                <div className="ml-2">
                                    <h3 class="flex items-center mb-1 text-lg font-semibold">Flowbite Application UI v2.0.0 <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                                        </svg> Download ZIP
                                    </a>
                                </div>
                            </li> */}
                        </ol>
                    </div>
                </section>
    );
};

export default Timeline;
