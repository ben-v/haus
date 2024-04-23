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

    let titleColors: string;
    let descriptionColors: string;
    const titleSizeClassNames: string = propsWithDefaults.titleSize === "Standard" ? "text-lg" : "text-xl md:text-2xl lg:text-3xl";

    if (propsWithDefaults.invertContainerColors) {
        titleColors = "dark:text-gray-900 text-white";
        descriptionColors = "dark:text-gray-600 text-gray-300";
    } else {
        titleColors = "text-gray-900 dark:text-white";
        descriptionColors = "text-gray-600 dark:text-gray-300";
    }

    return (
        <div className="flex items-center gap-4">
            <div className={`relative z-10 flex h-15 w-15 p-1 align-middle`}>
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
