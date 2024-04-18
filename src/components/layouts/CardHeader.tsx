import parse from "html-react-parser";

export interface CardHeaderProps {
    title: string,
    description?: string,
    titleAlignment?: "Left" | "Center" | "Right";
    descriptionAlignment?: "Left" | "Center" | "Right";
}

const defaultProps = {
    titleAlignment: "Center",
    descriptionAlignment: "Center"
} satisfies Partial<CardHeaderProps>

const CardHeader = (props: CardHeaderProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    }

    let titleAlignment: string = "";
    let descriptionAlignment: string = "";

    if (propsWithDefaults.titleAlignment) {
        switch (propsWithDefaults.titleAlignment) {
            case "Left": {
                titleAlignment = "text-left";
                break;
            }
            case "Right": {
                titleAlignment = "text-right";
                break;
            }
            case "Center":
            default: {
                titleAlignment = "text-center";
                break;
            }
        }
    }

    if (props.descriptionAlignment) {
        switch (props.descriptionAlignment) {
            case "Left": {
                descriptionAlignment = "text-center lg:text-left";
                break;
            }
            case "Right": {
                descriptionAlignment = "text-center lg:text-right";
                break;
            }
            case "Center":
            default: {
                descriptionAlignment = "text-center";
                break;
            }
        }
    }

    return (
        <div className="w-auto">
            <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 dark:text-white ${titleAlignment}`}>{parse(propsWithDefaults.title.trim())}</h2>
            {propsWithDefaults.description ? <p className={`mt-2 mx-2 md:mt-6 w-auto text-gray-600 dark:text-gray-300 ${descriptionAlignment}`}>{parse(propsWithDefaults.description.trim())}</p> : ""}
        </div>
    )
  }
  
  export default CardHeader