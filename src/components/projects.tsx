import React from 'react'
import { motion } from "framer-motion"
import { PROJECTS } from '../constants'

type ProjectType = {
    title: string,
    description: string,
    image: string,
    technologies: string[],
}

const Projects = () => {
    return (
        <div className="border- border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h1>
            {
                PROJECTS?.map((project: ProjectType, index: number) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <img className="mb-6 rounded" src={project?.image} width={150} height={150} alt={project?.title} />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold">{project?.title}</h6>
                            <p className="mb-4 text-neutral-400">{project?.description}</p>
                            {
                                project?.technologies?.map((technology: string, index: number) => (
                                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900" key={index}>
                                        {technology}
                                    </span>
                                ))
                            }
                        </motion.div>
                    </div>
                ))
            }

        </div>
    )
}

export default Projects