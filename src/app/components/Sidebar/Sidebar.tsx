import {FaGithub, FaRegEnvelope, FaTelegramPlane} from "react-icons/fa";
import React from "react";

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="text-4xl cursor-pointer">
                <a href="https://t.me/SKaterinenko" target="_blank"><FaTelegramPlane className="mb-8"/></a>
                <a href="mailto: skaterinenko@gmail.com" target="_blank"><FaRegEnvelope className="mb-8"/></a>
                <a href="https://github.com/SKaterinenko" target="_blank"><FaGithub className="mb-8"/></a>
            </div>
        </div>
    )
}

export default Sidebar