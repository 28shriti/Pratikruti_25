import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-10 px-4 bg-[#79D7BE]">

            {/* First Section */}
            <div className="container flex items-center justify-center mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-semibold text-Black-200">About &nbsp; </h2>
                <img
                    src="/logos/Pratikruti(2).png"
                    alt="Pratikruti"
                    className="w-40 md:w-64 h-auto"
                />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mb-16">
                <div className="md:w-1/3 mb-8 md:mb-0">
                    <img
                        src="/logos/Pratikruti_img.jpeg"
                        alt="About Pratikruti"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 text-left md:pl-8">
                    {/* <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Our Mission</h3> */}
                    <p className="text-base text-black leading-relaxed text-justify mb-4">
                        Pratikruti is a prestigious national-level project competition hosted by Yeshwantrao Chavan College of Engineering, Nagpur This event aims to inspire young technocrats to channel their imagination, passion, and creativity into technological innovations that can make a meaningful impact on the world. <br /> <br />

                        The competition fosters intercultural dialogue and collaboration, bringing together students and mentors from diverse states across India. It provides a unique platform for undergraduate engineering students to enhance their skills, deepen their knowledge, and develop the essential qualities for their future careers. <br /> <br />

                        At its core, Pratikruti is dedicated to promoting a research- oriented learning culture. It encourages students to think beyond conventional solutions, unleashing their hidden talents and nurturing innovative ideas. By doing so, Pratikruti aims to equip participants with the skills needed to contribute to the nation's future.
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div className="container mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-semibold text-Black-200 tracking-wide">About YCCE</h2>
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
                    <p className="text-base text-black leading-relaxed text-justify mb-4">
                    YCCE established in 1984 with 3 UG programmes having an intake of 180. After 40 years, we are an Empowered Autonomous Institute affiliated to Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur with 13 UG programmes,
                    7 PG Programmes with 6500 students on campus and 166 students have been awarded Ph.D.<br/><br/>

                    The institute is also accredited by NAAC with Grade 'A++' and score of 3.60. 
                    The institute is selected by Ministry of MSME, New Delhi for Business Incubation and Technology Business Incubation (TBI) under their ASPIRE Scheme in 2018. 
                    YCCE TBI Foundation is a section 8 company and 25 start-ups are running under it. 
                    The Institution is consistently within 200 ranks in "National Institute Ranking Framework" (NIRF) of Ministry of Education, Government of India since 2016.
                    Among the many feathers in our cap is the recent success of our Titan group who won the Best Rover Challenge by ISRO, showcasing our continued excellence in Innovation and research. 
                    Thus, YCCE has spent the past 40 years nurturing not just technical excellence but also fostering values like empathy, social responsibility, and leadership in our students.

                    </p>
                </div>
            </div>


            {/* Third Section */}
            <div className="container mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-semibold text-Black-200 tracking-wide">About RUBY JUBILEE YEAR</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mb-16">
                <div className="md:w-1/3 mb-8 md:mb-0">
                    <img
                        src="/logos/ycce-about.webp"
                        alt="About Ruby Jubilee Year"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 text-left md:pl-8">

                    <p className="text-base text-black leading-relaxed text-justify mb-4">
                
                    Yeshwantrao Chauvan College of Engineering Celebrating 40 Years of Excellence in Engineering Education.<br />

                    This year marks a monumental milestone as we celebrate 40 years of excellence in engineering education.
                    With four decades of commitment to fostering innovation, nurturing talent, and driving impactful engineering solutions, 
                    YCCE has solidified its reputation as a leading institution in engineering and technology.<br/><br/>

                    The Ruby Jubilee marks not only a time to reflect on our achievements but also to ignite aspirations for the future. 
                    To commemorate this occasion, YCCE will host a series of events, seminars, and competitions, bringing together students, alumni, faculty, and industry experts. 
                    These events are designed to inspire young engineers, foster new ideas, and reinforce our commitment to contributing to a sustainable, technologically advanced society.
                    In the series of Ruby Jubilee Celebration YCCE is organising Pratikruti...the National Level Project Competition.<br/>

                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
