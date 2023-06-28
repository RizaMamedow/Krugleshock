import * as React from "react";

const textShadowStyles = {textShadow: "2px 2px #000, 4px 4px #ffd51e"};

export const AppHeader: React.FC = () => {
    return (
        <h1 className="text-4xl md:text-7xl font-black italic text-white text-center text-border-size-2
         text-border-primary text-center" style={textShadowStyles}>
            Krugleshock
        </h1>
    )
};
