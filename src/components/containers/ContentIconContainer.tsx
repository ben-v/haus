import { ReactNode } from 'react';

export interface ContentIconContainerProps {
    invertContainerColors?: boolean;
    children: ReactNode;
}

const defaultProps = {
    invertContainerColors: false
} satisfies Partial<ContentIconContainerProps>

const ContentIconContainer = (props: ContentIconContainerProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    }

    let containerColors: string;

    if (propsWithDefaults.invertContainerColors) {
        containerColors = "dark:border-gray-300/60 dark:bg-white border-gray-700/60 bg-gray-800";
    } else {
        containerColors = "border-gray-300/60 bg-white dark:border-gray-700/60 dark:bg-gray-800";
    }

    return (
        <>
            <div className={`relative z-10 flex h-20 w-20 rounded-3xl border p-1 align-middle shadow-gray-600/10 shadow-3xl ${containerColors}`}>
                <div className={`absolute inset-0 hidden scale-100 rounded-3xl`}></div>                
                {propsWithDefaults.children}
            </div>      
        </>
    );
};

export default ContentIconContainer;
