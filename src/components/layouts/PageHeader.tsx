import parse from "html-react-parser";
import SvgAccentLine from "../images/SvgAccentLine";
import { renderToString } from "react-dom/server";

export interface PageHeaderProps {
    titlePartA: string,
    titlePartB?: string,
    description?: string,
    highlightType?: "None" | "Vibrant" | "Standard",
    highlightPart?: "A" | "B"
    titleAlignment?: "Left" | "Center" | "Right";
    descriptionAlignment?: "Left" | "Center" | "Right";
}

export const defaultPageHeaderProps = {
    highlightType: "Standard",
    highlightPart: "B",
    titleAlignment: "Center",
    descriptionAlignment: "Center"
} satisfies Partial<PageHeaderProps>

/**
 * General page header component for use across all pages.
 * 
 * @param props Header properties
 * 
 * @returns General page header
 */
const PageHeader = (props: PageHeaderProps) => {
    const propsWithDefaults = {
        ...defaultPageHeaderProps,
        ...props
    }
    
    let title: string = "";
    const description: string = propsWithDefaults.description ? propsWithDefaults.description.trim() : "";
    let titleAlignment: string = "";
    let descriptionAlignment: string = "";
    let headingClassNames: string = "page-header-heading-standard";

    switch (propsWithDefaults.highlightType)
    {
        case "Vibrant": {
            headingClassNames = "page-header-heading-vibrant";

            if (propsWithDefaults.highlightPart === "A") {
                title = `<span className="relative">${<SvgAccentLine className="absolute inset-x-0 -bottom-1 w-full opacity-50" />}<span className="relative bg-gradient-to-r from-primary to-secondaryLight bg-clip-text text-transparent dark:from-primaryLight dark:to-secondaryLight md:px-2">${propsWithDefaults.titlePartA}</span></span>${propsWithDefaults.titlePartB ? propsWithDefaults.titlePartB : ""}`
            } else {
                const titlePartB: string = propsWithDefaults.titlePartB ? `<span className="relative">${renderToString(<SvgAccentLine className="absolute inset-x-0 -bottom-1 w-full opacity-50" />)}<span className="relative bg-gradient-to-r from-primary to-secondaryLight bg-clip-text text-transparent dark:from-primaryLight dark:to-secondaryLight md:px-2">${propsWithDefaults.titlePartB}</span></span>` : "";
                
                title = `${propsWithDefaults.titlePartA}${propsWithDefaults.titlePartB ? titlePartB : ""}`
            }

            break;
        }
        case "Standard": {
            if (propsWithDefaults.highlightPart === "A") {
                title = `<span className="opacity-80">${propsWithDefaults.titlePartA}</span>${propsWithDefaults.titlePartB ? propsWithDefaults.titlePartB : ""}`
            } else {
                const titlePartB: string = propsWithDefaults.titlePartB ? `<span className="opacity-80">${propsWithDefaults.titlePartB}</span>` : "";
                
                title = `${propsWithDefaults.titlePartA}${propsWithDefaults.titlePartB ? titlePartB : ""}`
            }

            break;
        }
        case "None":
        default: {
            title = `${propsWithDefaults.titlePartA}${propsWithDefaults.titlePartB ? propsWithDefaults.titlePartB : ""}`
            break;
        }
    }

    if (propsWithDefaults.titleAlignment) {
        switch (propsWithDefaults.titleAlignment) {
            case "Left": {
                titleAlignment = "lg:text-left";
                break;
            }
            case "Right": {
                titleAlignment = "lg:text-right";
                break;
            }
            case "Center":
            default: {
                titleAlignment = "";
                break;
            }
        }
    }

    if (propsWithDefaults.descriptionAlignment) {
        switch (propsWithDefaults.descriptionAlignment) {
            case "Left": {
                descriptionAlignment = "lg:text-left";
                break;
            }
            case "Right": {
                descriptionAlignment = "lg:text-right";
                break;
            }
            case "Center":
            default: {
                descriptionAlignment = "";
                break;
            }
        }
    }

    return (
        <div className="page-header-container">
            <div className={`${headingClassNames} ${titleAlignment}`}>{parse(title)}</div>
            {props.description ? <div className={`page-header-description general-body-text ${descriptionAlignment}`}>{parse(description)}</div> : ""}
        </div>
    )
}

export default PageHeader
