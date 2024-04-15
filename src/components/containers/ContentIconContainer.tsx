import { ReactNode } from 'react';

export interface ContentIconContainerProps {
    reverseBackgroundColors?: boolean;
    children: ReactNode;
}

const defaultProps = {
    reverseBackgroundColors: false
} satisfies Partial<ContentIconContainerProps>

const ContentIconContainer = (props: ContentIconContainerProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    }

    let backgroundColors: string;
    if (propsWithDefaults.reverseBackgroundColors) {
        backgroundColors = "border-gray-600/60 bg-gray-900/40 dark:border-gray-200 dark:bg-white";
    } else {
        backgroundColors = "border-gray-200 bg-white dark:border-gray-600/60 dark:bg-gray-900/40";
    }

    return (
        <div className={`flex h-20 w-20 rounded-3xl border p-1 align-middle ${backgroundColors}`}>
            {propsWithDefaults.children}
        </div>
    );
};

export default ContentIconContainer;
