import * as React from "react";
import Image from "next/image";
import {FaGithub, FaInstagram, FaTelegramPlane} from "react-icons/fa";
import {RefsBox} from "../components";


const AboutPage: React.FC = () => {
    return (
        <div>
            <h3 className="text-3xl font-semibold text-white">About Me</h3>
            <p className="text-white text-lg mt-3">My story is short. I am a simple guy from the town, and
                at some point in my life I developed an interest in programming.
                I started to study html further css, javascript, python and so on.
                I took a bit from everywhere: Ruby, studied Godot, C#, but in the end
                I chose the direction of web programming, I started writing landing pages and so on.
                <br/><br/>
                Later I started to be interested in the backend, now I love to write in django.
                I wrote API on Django Rest Framework. Now I want to work on the development of sites on react or NextJS. I also know typescript.
                <br/><br/>
                This site is made on NextJS. A link to its repository will be given below. on the Certificates page my certificates for learning different languages and technologies will be placed
            </p>
            <br/>
            <a href={process.env.REPOSITORY_LINK} className="text-primary">Repository</a>
            <RefsBox/>
        </div>
    )
};

export default AboutPage;