import * as React from "react";


export const ContentBox: React.FC = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mt-5 md:mt-20 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
            { children }
        </div>
    )
};
