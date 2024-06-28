import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Links } from '../config';


export type SocialLinkProps = {
    image: string,
    url: string
}

export default function SocialSide() {
    const socials: SocialLinkProps[] = [
        {
            image: "/assets/social/telegram.svg",
            url: Links.telegram
        },
        {
            image: "/assets/social/github.svg",
            url: Links.github
        },
        {
            image: "/assets/social/instagram.svg",
            url: Links.instagram
        },
        {
            image: "/assets/social/linkedin.svg",
            url: Links.linkedin
        }
    ]

    return (
        <section className={clsx(
            "rounded-2xl lg:shadow-xl lg:bg-white px-2 flex gap-1 items-center", 
        )}>
            {socials.map((social, index) => (
                <SocialLink {...social} key={index}/>
            ))}
        </section>
    )
}

export function SocialLink({ image, url } : SocialLinkProps) {
    return (
        <div className="hover:shadow-lg transition-all rounded-full">
            <Link href={url} target="_blank">
                <Image 
                    alt={url}
                    src={image}  
                    width={25}
                    height={25}        
                />
            </Link>
        </div>
    )
} 