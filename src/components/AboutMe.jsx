import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>About Me</span>
                    <span className="flex items-center gap-2">
                        <span>I am a </span>
                        <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                        <span>Developer</span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                I am Sudhir Kumar, a motivated and forward-thinking individual hailing from Bihar. I am currently
                pursuing a B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence 
                and Machine Learning at Galgotias University. My aspiration is to excel as a leading developer in 
                the field of AI and ML, and I am committed to continuously learning and growing in this domain.
                
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                I actively participate in hackathons, where I have consistently demonstrated my skills, securing first 
                place in several competitions. My technical expertise spans Python, PHP, Java, and UI/UX design. 
                Additionally, I have gained significant hands-on experience by working on multiple live projects 
                as a backend developer, collaborating with seasoned professionals from renowned companies such as 
                Wipro and Infosys.


                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                I have also earned certifications in Artificial Intelligence Fundamentals and Advanced Python Programming, which 
                further underscore my dedication to continuous learning and innovation.I am eager to contribute to transformative 
                projects and am committed to delivering efficient, creative solutions in the rapidly evolving field of AI and ML.
                </Div>
                {/* PARAGRAPH END */}
                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                I have undertaken several impactful projects, including: <br></br>
                Plant Disease Detection: A web application developed using Streamlit, Python, and Jupyter to analyze and identify plant diseases, offering solutions and precautions.<br></br>
                Kisan.AI: A multi-functional platform enabling farmers and vendors to trade crops, lease land, manage inventories, and detect plant diseases, employing technologies such as Python, JavaScript, and MySQL.
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
