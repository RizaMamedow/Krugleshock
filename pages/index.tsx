import * as React from "react";
import Image from 'next/image'
import {RefsBox} from "../components";


const HomePage: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-4 mb-5">
                <div className="col-span-3">
                    <h3 className="text-3xl font-bold text-white">Hi my name is <span className="text-primary">Riza</span></h3>
                    <p className="text-white mt-5 text-xl">
                        I am Riza Mamedov, I live in Ashgabat.<br/> now I am in 10th
                        grade (2007) and I am a programmer, I write in Typescript <br/>
                        and in python these are my main areas
                    </p>
                </div>
                <div className="p-2">
                    <Image
                        src="/avatar.jpg"
                        width={250}
                        height={250}
                        alt="Picture of the author"
                        className="rounded-full slow-spin-animation"
                    />
                </div>
            </div>
            <RefsBox />
        </>
    )
};

export default HomePage;