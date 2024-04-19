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

    let containerColors: string;
    let titleColors: string;
    let descriptionColors: string;
    const titleSizeClassNames: string = propsWithDefaults.titleSize === "Standard" ? "text-lg" : "text-xl md:text-2xl lg:text-3xl";

    if (propsWithDefaults.invertContainerColors) {
        // For some reason, the border color is not being applied as expected when using string interpolation and dark theme ONLY
        // when inverting colors though. For now, just use in-effecient approach as of 4/18/24. Might be my eyes playing tricks on me.
        containerColors = `dark:border-gray-300/60 dark:bg-white border-gray-700/60 bg-gray-800`;
        titleColors = "dark:text-gray-900 text-white";
        descriptionColors = "dark:text-gray-600 text-gray-300";
    } else {
        containerColors = "border-gray-300/60 bg-white dark:border-gray-700/60 dark:bg-gray-800";
        titleColors = "text-gray-900 dark:text-white";
        descriptionColors = "text-gray-600 dark:text-gray-300";
    }

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
