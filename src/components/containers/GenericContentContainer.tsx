import { ReactNode } from 'react';
import { BaseContainerProps, BaseContainerClassNames, GetContainerClassNamesFromProps } from './Container';

export interface GenericContentContainerProps extends BaseContainerProps {
    bodyClassNames?: string,
    children: ReactNode;
}

const defaultProps = {
    bodyClassNames: "",
} satisfies Partial<GenericContentContainerProps>


const GenericContentContainer = (props: GenericContentContainerProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    };

    const classNames: BaseContainerClassNames = GetContainerClassNamesFromProps(propsWithDefaults);

    return (
        <div className={`relative z-10 w-full ${classNames.growClassNames} ${classNames.containerClassNames}`}>
            <div className={`relative z-20 flex flex-col h-full ${classNames.paddingClassNames} ${propsWithDefaults.bodyClassNames}`}>
                {props.children}
            </div>
        </div>
    );
};

export default GenericContentContainer;
