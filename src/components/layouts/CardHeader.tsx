import parse from "html-react-parser";
import { ContentElementProps } from "./LayoutTypes";

const defaultProps = {
    titleAlignment: "Left",
    descriptionAlignment: "Left"
} satisfies Partial<ContentElementProps>

const CardHeader = (props: ContentElementProps) => {
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
        <div className="card-header-container">
            {propsWithDefaults.title ? <h2 className={`card-header-title ${titleAlignment}`}>{parse(propsWithDefaults.title.trim())}</h2> : ""}
            {propsWithDefaults.description ? <p className={`card-header-description ${descriptionAlignment}`}>{parse(propsWithDefaults.description.trim())}</p> : ""}
        </div>
    )
  }
  
  export default CardHeader