import parse from "html-react-parser";
import SvgAccentLine from "../images/SvgAccentLine";
import { renderToString } from "react-dom/server";

export interface PageHeaderProps {
    titlePartA: string,
    titlePartB?: string,
    Description?: string,
    highlightType?: "None" | "Vibrant" | "Standard",
    highlightPart?: "A" | "B"
    align?: "Left" | "Center" | "Right";
}

const defaultProps = {
    highlightType: "Standard",
    highlightPart: "B",
    align: "Center"
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
        ...defaultProps,
        ...props
    }
    
    let title: string = "";
    const description: string = props.Description ? props.Description : "";
    let alignment: string = "";
    let textColor: string = "text-gray-900";

    if (props.align) {
        switch (props.align) {
            case "Left": {
                alignment = "lg:text-left";
                break;
            }
            case "Right": {
                alignment = "lg:text-right";
                break;
            }
            case "Center":
            default: {
                alignment = "";
                break;
            }
        }
    }

    switch (propsWithDefaults.highlightType)
    {
        case "Vibrant": {
            textColor = "text-blue-900";

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

    return (
        <div className="py-2 px-0 md:p-2 w-auto text-center">
            <h1 className={`relative text-center ${alignment} font-bold ${textColor} dark:text-white text-4xl sm:text-5xl md:text-6xl`}>{parse(title)}</h1>
            <p className="m-8 md:m-12 text-gray-600 dark:text-gray-300 text-lg md:text-lg w-auto">{description}</p>
        </div>
    )
}

export default PageHeader
