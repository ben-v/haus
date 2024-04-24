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

    const titleAlignment: string = `card-header-header-align-${propsWithDefaults.titleAlignment.toLowerCase()}`;
    const descriptionAlignment: string = `card-header-description-align-${propsWithDefaults.descriptionAlignment.toLowerCase()}`;

    return (
        <div className="card-header-container">
            {propsWithDefaults.title ? <h2 className={`card-header-title ${titleAlignment}`}>{parse(propsWithDefaults.title.trim())}</h2> : ""}
            {propsWithDefaults.children ? <p className={`card-header-description ${descriptionAlignment}`}>{propsWithDefaults.children}</p> : ""}
        </div>
    )
  }
  
  export default CardHeader