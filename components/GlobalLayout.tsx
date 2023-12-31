import * as React from "react";
import {ReactNode} from "react";
import {AppHeader} from "./Header";
import {LocaleSwitcher} from "./LocaleSwitcher";
import {Navigation} from "./Navigation";
import {SiNextdotjs, SiVercel} from "react-icons/si";

export const GlobalLayout = ({children} : {children: ReactNode}) => {
    return (
        <>
            <div className='pt-5 md:pt-10 min-h-screen px-15 lg:px-52 pb-10'>
                <div className="flex align-center flex-col">
                    <AppHeader/>
                    <div className="m-2 flex justify-end flex-row">
                        <LocaleSwitcher />
                    </div>
                    <div className="mt-5 md:mt-15 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
                        <Navigation/>
                        <div className="col-span-2 p-5 pt-0">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-6 text-white text-sm italic flex justify-center content-center">
                Built with <SiNextdotjs className="mx-1 mt-0.5"/> Next.js, deployed with <SiVercel className="mx-1 mt-0.5"/> Vercel
            </div>
        </>
    )
};

