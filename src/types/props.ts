import {ReactNode} from "react";

export type SocialLinkProps = {
    image: string,
    url: string
}

export type LanguageSwitcherSelectProps = {
    children: ReactNode;
    defaultValue: string;
    label: string;
}