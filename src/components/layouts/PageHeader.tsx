import parse from "html-react-parser";

export interface PageHeaderProps {
    titlePartA: string,
    titlePartB?: string,
    Description?: string,
    highlightType?: "None" | "Vibrant" | "Standard",
    highlightPart?: "A" | "B"
}

const defaultProps = {
    highlightType: "Standard",
    highlightPart: "B"
} satisfies Partial<PageHeaderProps>

const PageHeader = (props: PageHeaderProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    }
        
    let title: string = "";
    const description: string = props.Description ? props.Description : "";

    switch (propsWithDefaults.highlightType)
    {
        case "Vibrant": {
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
            <h1 className="relative text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">{parse(title)}</h1>
            <p className="m-8 md:m-12 text-gray-600 dark:text-gray-300 text-lg md:text-lg w-auto">{description}</p>
        </div>
    )
}

export default PageHeader
