import { ReactNode } from 'react';
import parse from "html-react-parser";

export interface ContentIconContainerProps {
    title: string;
    description?: string;
    children: ReactNode;
}

const ContentIconContainer = (props: ContentIconContainerProps) => {
    return (
        <div className={`content-icon-container ${props.description ? "items-start" : "items-center"}`}>
            <div className={`content-icon-container-icon`}>
                {props.children}
            </div>
            <div className="content-icon-container-header">
                <h4 className={`content-icon-container-header-title container-header-text`}>{props.title}</h4>
                { props.description ? parse(`<p className="content-icon-container-header-body general-body-text">${props.description}</p>`) : ""}                
            </div>
        </div>
    );
};

export default ContentIconContainer;
