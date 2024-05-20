import { PROJECTS } from "./index";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}    
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h1>

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.4 }}
            >
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.title} className="mb-4 lg:mb-0 lg:mr-4 ml-0 lg:ml-[-0.85rem] rounded" />
                            </a>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <h6 className="mb-2 font-semibold text-white hover:underline">{project.title}</h6>
                            </a>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-white">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Projects;
