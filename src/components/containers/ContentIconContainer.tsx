import { ReactNode } from 'react';
import parse from "html-react-parser";
import { ContentElementProps } from '../layouts/LayoutTypes';

export interface ContentIconContainerProps extends ContentElementProps {
    description?: string;
    children: ReactNode;
}

const defaultProps = {
    titleClassnames: "",
    childrenClassnames: ""
} satisfies Partial<ContentIconContainerProps>

const ContentIconContainer = (props: ContentIconContainerProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    }

    return (
        <div className={`content-icon-container ${props.description ? "items-start" : "items-center"}`}>
            <div className={`content-icon-container-icon`}>
                {props.children}
            </div>
            <div className="content-icon-container-header">
                <h4 className={`content-icon-container-header-title ${propsWithDefaults.titleClassnames}`}>{props.title}</h4>
                { props.description ? parse(`<p className="content-icon-container-description body-tex ${propsWithDefaults.childrenClassnames}">${props.description}</p>`) : ""}                
            </div>
        </div>
    );
};

export default ContentIconContainer;
