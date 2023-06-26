import {FaGithub, FaInstagram, FaTelegramPlane} from "react-icons/fa";
import * as React from "react";


const iconStyles = {width: '39px', height: '39px'};

export const RefsBox = () => {
    return (
        <div className="flex md:mt-20">
            <a href={process.env.INSTAGRAM_LINK} target="_blank">
                <FaInstagram className="text-fuchsia-600  p-1" style={iconStyles}/>
            </a>
            <a href={process.env.TELEGRAM_LINK} target="_blank">
                <FaTelegramPlane className="text-blue-500 p-1" style={iconStyles}/>
            </a>
            <a href={process.env.GITHUB_LINK} target="_blank">
                <FaGithub className="text-white p-1" style={iconStyles}/>
            </a>
        </div>
    )
};