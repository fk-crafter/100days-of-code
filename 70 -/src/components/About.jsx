import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                className="my-20 text-center text-4xl"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-neutral-500">About Me</span>
            </motion.h1>
            
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.4 }}
                            src={aboutImg}
                            className="rounded-2xl"
                            alt="About me"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.4 }}
                            className="my-2 max-w-xl py-6"
                        >
                            I am a web developer. My role is to create the structure of websites and web applications, focusing on front-end development to ensure the overall success of the product. Discover some of my work in the Projects section.
                            <br />
                            <br />

                            I also enjoy sharing content related to what I've learned through my experience and training in web development to help others in the development community. Feel free to connect with me or follow my GitHub profile where I publish useful content related to web development and programming.
                            <br />
                            <br />

                            I am open to job opportunities where I can contribute, learn, and grow professionally. If you have a good opportunity that matches my skills and experience, please don't hesitate to contact me
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
