import { ReactNode } from 'react';

export interface SharpCornerContainerProps {
    children: ReactNode;
}

const SharpCornerClipContainer = (props: SharpCornerContainerProps) => {

    return (
        <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
            <div className="relative bg-gray-50 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                    <div data-target="panel-0" className="panel-preview absolute inset-0 z-0 flex  items-end overflow-hidden px-6  transition duration-500 sm:px-10">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SharpCornerClipContainer;
