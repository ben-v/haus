import { ReactNode } from 'react';
import parse from "html-react-parser";

export interface ContentIconContainerProps {
    title: string;
    description?: string;
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
    };

    let titleClassNames: string;
    let descriptionClassNames: string;

    if (propsWithDefaults.invertContainerColors) {
        titleClassNames = "container-header-text-inverted";
        descriptionClassNames = "general-body-text-inverted";
    } else {
        titleClassNames = "container-header-text";
        descriptionClassNames = "general-body-text";
    }

    return (
        <div className={`content-icon-container ${propsWithDefaults.description ? "items-start" : "items-center"}`}>
            <div className={`content-icon-container-icon`}>
                {propsWithDefaults.children}
            </div>
            <div className="content-icon-container-header">
                <h4 className={`content-icon-container-header-title ${titleClassNames}`}>{propsWithDefaults.title}</h4>
                { propsWithDefaults.description ? parse(`<p className="content-icon-container-header-body ${descriptionClassNames}">${propsWithDefaults.description}</p>`) : ""}                
            </div>
        </div>
    );
};

export default ContentIconContainer;
