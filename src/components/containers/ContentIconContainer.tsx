import { ReactNode } from 'react';
import parse from "html-react-parser";

export interface ContentIconContainerProps {
    title: string;
    description?: string;
    titleSize?: "Large" | "Standard";
    invertContainerColors?: boolean;
    children: ReactNode;
}

const defaultProps = {
    titleSize: "Standard",
    invertContainerColors: false
} satisfies Partial<ContentIconContainerProps>

const ContentIconContainer = (props: ContentIconContainerProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    };

    const standardPrefix: string = propsWithDefaults.invertContainerColors ? "dark:" : "";
    const invertedPrefix: string = propsWithDefaults.invertContainerColors ? "" : "dark:";

    const containerColors: string = `${standardPrefix}border-gray-300/60 ${standardPrefix}bg-white ${invertedPrefix}border-gray-700/60 ${invertedPrefix}bg-gray-800`;
    const titleColors: string = `${standardPrefix}text-gray-900 ${invertedPrefix}text-white`;
    const descriptionColors: string = `${standardPrefix}text-gray-600 ${invertedPrefix}text-gray-300`;
    const titleSizeClassNames: string = propsWithDefaults.titleSize === "Standard" ? "text-lg" : "text-xl md:text-2xl lg:text-3xl";

    return (
        <div className="flex items-center gap-4">
            <div className={`relative z-10 flex h-20 w-20 rounded-3xl border p-1 align-middle shadow-gray-600/10 shadow-3xl ${containerColors}`}>
                <div className={`absolute inset-0 hidden scale-100 rounded-3xl`}></div>
                {propsWithDefaults.children}
            </div>
            <div className="w-[calc(100%-7.5rem)]">
                <h4 className={`${titleSizeClassNames} font-bold ${titleColors}`}>{propsWithDefaults.title}</h4>
                { propsWithDefaults.description ? parse(`<p className="mt-1 ${descriptionColors}">${propsWithDefaults.description}</p>`) : ""}                
            </div>
        </div>
    );
};

export default ContentIconContainer;
