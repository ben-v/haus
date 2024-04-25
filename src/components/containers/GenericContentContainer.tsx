import { ReactNode } from 'react';
import { BaseContainerProps, BaseContainerClassNames, GetContainerClassNamesFromProps } from './Container';

export interface GenericContentContainerProps extends BaseContainerProps {
    children: ReactNode;
}

const defaultProps = {
    padding: "Large",
  } satisfies Partial<GenericContentContainerProps>
  
const GenericContentContainer = (props: GenericContentContainerProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
      }
    
    const classNames: BaseContainerClassNames = GetContainerClassNamesFromProps(propsWithDefaults);

    return (
        <div id={props.id ? props.id : ""} className={`relative z-10 w-full ${classNames.containerClassNames}`}>
            <div className={`relative z-20 flex flex-col h-full ${classNames.bodyClassNames}`}>
                {props.children}
            </div>
        </div>
    );
};

export default GenericContentContainer;
