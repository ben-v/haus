import { ReactNode } from 'react';
import { BaseContainerProps, BaseContainerClassNames, GetContainerClassNamesFromProps } from './Container';

export interface GenericContentContainerProps extends BaseContainerProps {
    children: ReactNode;
}

const GenericContentContainer = (props: GenericContentContainerProps) => {
    const classNames: BaseContainerClassNames = GetContainerClassNamesFromProps(props);

    return (
        <div className={`relative z-10 w-full ${classNames.growClassNames}`}>
            <div className={`relative z-11 flex flex-col h-full ${classNames.paddingClassNames}`}>
                {props.children}
            </div>
        </div>
    );
};

export default GenericContentContainer;
