import {FaGithub, FaInstagram, FaTelegramPlane} from "react-icons/fa";
import * as React from "react";
import Config from "../logics/config";


const iconStyles = {width: '39px', height: '39px'};

export const RefsBox = () => {
    return (
        <div className="flex md:mt-20">
            <a href={Config.links.instagram} target="_blank">
                <FaInstagram className="text-pink-500 p-1" style={iconStyles}/>
            </a>
            <a href={Config.links.telegram} target="_blank">
                <FaTelegramPlane className="text-blue-500 p-1" style={iconStyles}/>
            </a>
            <a href={Config.links.github} target="_blank">
                <FaGithub className="text-white p-1" style={iconStyles}/>
            </a>
        </div>
    )
};