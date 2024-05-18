import React from 'react'
import logo from "../assets/logo.png"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <div>
        <div className="mb-20 flex items-center justify-between py6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        </div>
    </div>
    </div>
  )
}

export default Navbar