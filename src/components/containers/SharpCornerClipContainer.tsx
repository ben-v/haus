import { ReactNode } from 'react';

export interface SharpCornerContainerProps {
    children: ReactNode;
}

const SharpCornerClipContainer = (props: SharpCornerContainerProps) => {

    return (
        <div className="relative bg-gray-50 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
            <div className="relative flex items-end px-6 pt-6 pb-0 overflow-hidden">
                {props.children}
            </div>
        </div>
    );
};

export default SharpCornerClipContainer;
