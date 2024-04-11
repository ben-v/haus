import React from 'react'

interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

export const SectionLayout = (props: SectionProps) => {
    const className = "m-12 pt-32 sm:pt-40 md:pt-44 outline outline-black" + props.className;

    return (
        <section id={props.id} className={className}>
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 outline outline-blue-500 m-4 p-2">
                <div className="relative outline outline-gray-500 m-4 p-2">
                    {props.children}
                </div>
            </div>
        </section>
    )
}