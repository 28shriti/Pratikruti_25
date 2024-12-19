import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-10 px-4 bg-gray-800">

            {/* First Section */}
            <div className="container flex items-center justify-center mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-semibold text-yellow-100">About &nbsp; </h2>
                <img
                    src="/logos/pratikruti-about.png"
                    alt="Pratikruti"
                    className="w-40 md:w-64 h-auto"
                />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mb-16">
                <div className="md:w-1/3 mb-8 md:mb-0">
                    <img
                        src="/logos/ycce-about.webp"
                        alt="About Image"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 text-left md:pl-8">
                    {/* <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Our Mission</h3> */}
                    <p className="text-base text-white leading-relaxed text-justify mb-4">
                        Pratikruti is a prestigious national-level project competition hosted by Yeshwantrao Chavan College of Engineering, Nagpur This event aims to inspire young technocrats to channel their imagination, passion, and creativity into technological innovations that can make a meaningful impact on the world. <br /> <br />

                        The competition fosters intercultural dialogue and collaboration, bringing together students and mentors from diverse states across India. It provides a unique platform for undergraduate engineering students to enhance their skills, deepen their knowledge, and develop the essential qualities for their future careers. <br /> <br />

                        At its core, Pratikruti is dedicated to promoting a research- oriented learning culture. It encourages students to think beyond conventional solutions, unleashing their hidden talents and nurturing innovative ideas. By doing so, Pratikruti aims to equip participants with the skills needed to contribute to the nation's future.
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div className="container mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-semibold text-yellow-100 tracking-wide">About YCCE</h2>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center justify-center mb-16">
                <div className="md:w-1/3 mb-8 md:mb-0">
                    <img
                        src="/logos/ycce-about.webp"
                        alt="About YCCE"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 text-left md:pr-8">
                    <p className="text-base text-white leading-relaxed text-justify mb-2">
                        Yeshwantrao Chavan College of Engineering (YCCE) is  established in 1984 by Nagar Yuwak Shikshan Sanstha, Nagpur. It is affiliated to Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur.  The institute is implementing autonomy in progressive manner from academic session 2010-11 for students admitted to B.E. and M.Tech. <br /> <br />
                        YCCE is renowned for engineering education and research. For over 34 years, it has successfully nurtured young engineering professionals, becoming a sought after destination for students aspiring to higher technical education and placement in the competitive software and core industry. <br /> <br />

                        YCCE, Nagpur in its continuous efforts to recognize excellence in areas of technology among its scholars organised ‘Pratikruti ..National Level project Competition’ every year. Participants are invited from leading technological institutes. Awards are in the form of prize money and recognition. This year YCCE Pratikruti-2025 is organized on 25th February 2025 at YCCE, Campus. <br /><br />

                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
