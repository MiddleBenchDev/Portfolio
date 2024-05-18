import React from 'react'
import { motion } from "framer-motion"
import { HERO_CONTENT } from '../constants'
import profileImage from '../assets/profile.png'

const Hero = () => {
    const animate = (delay: number, ltr: boolean, duration: number = 0.5) => ({
        hidden: { x: ltr ? -100 : 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay,
                duration
            }
        }
    })
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-center">
                        <motion.h1
                            variants={animate(0, true)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Middle Bench Dev
                        </motion.h1>
                        <motion.span
                            variants={animate(0.5, true)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300  via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={animate(1, true)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            variants={animate(1.2, false)}
                            initial="hidden"
                            animate="visible"
                            src={profileImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero