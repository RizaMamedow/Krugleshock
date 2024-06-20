import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {useRouter, usePathname} from '@/src/navigation';
import Image from 'next/image';

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
};

export function LanguageSwitcherSelect({
    children,
    defaultValue,
    label
}: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
            startTransition(() => {
            router.replace(
                // @ts-expect-error
                {pathname, params},
                {locale: nextLocale}
            );
        });
    }

    return (
        <label
        className={clsx(
            'hover:cursor-pointer',
            'relative text-gray-700',
            isPending && 'transition-opacity [&:disabled]:opacity-30'
        )}
        >
            <p className="sr-only">{label}</p>
            <select
                className="inline-flex appearance-none bg-transparent py-1.5 pl-2 pr-6"
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </select>
            <span className="pointer-event-none absolute right-1 top-[8px]">
                <Image 
                    src="/assets/arrowdown.svg"
                    alt='arrowdown'
                    width={25}
                    height={25}
                    className='px-2 text-red-500'
                />
            </span>
        </label>
    );
}