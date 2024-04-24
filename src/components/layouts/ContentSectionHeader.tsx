import parse from "html-react-parser";
import { ContentElementProps } from "./LayoutTypes";

const defaultProps = {
    titleAlignment: "Center",
    descriptionAlignment: "Center"
} satisfies Partial<ContentElementProps>

const ContenSectionHeader = (props: ContentElementProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    }

    const titleAlignment: string = `content-section-header-title-align-${propsWithDefaults.titleAlignment.toLowerCase()}`;
    const descriptionAlignment: string = `content-section-header-description-align-${propsWithDefaults.descriptionAlignment.toLowerCase()}`;

    return (
        <div className="content-section-header-container">
            {propsWithDefaults.title ? <div className={`content-section-header-title ${titleAlignment}`}>{parse(propsWithDefaults.title.trim())}</div> : ""}
            {propsWithDefaults.children ? <div className={`content-section-header-description ${descriptionAlignment}`}>{propsWithDefaults.children}</div> : ""}
        </div>
    )
  }
  
  export default ContenSectionHeader