import * as React from "react";
import Image from 'next/image'
import {RefsBox} from "../components";


const Error404: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full ">
            <h2 className="text-white font-black text-2xl">404 | Page Not Found</h2>
        </div>
    )
};

export default Error404;