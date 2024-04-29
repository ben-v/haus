import parse from "html-react-parser";
import { ContentElementProps } from "./LayoutTypes";

const defaultProps = {
    titleAlignment: "Center",
    childrenAlignment: "Center",
    titleClassnames: "",
    childrenClassnames: ""
} satisfies Partial<ContentElementProps>

const ContentSectionHeader = (props: ContentElementProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    }

    const titleAlignment: string = `content-section-header-title-align-${propsWithDefaults.titleAlignment.toLowerCase()}`;
    const descriptionAlignment: string = `content-section-header-description-align-${propsWithDefaults.childrenAlignment.toLowerCase()}`;

    return (
        <div className="content-section-header-container">
            {propsWithDefaults.title ? <div className={`content-section-header-title container-header-text ${titleAlignment} ${propsWithDefaults.titleClassnames}`}>{parse(propsWithDefaults.title.trim())}</div> : ""}
            {propsWithDefaults.children ? <div className={`content-section-header-description ${descriptionAlignment} ${propsWithDefaults.childrenClassnames}`}>{propsWithDefaults.children}</div> : ""}
        </div>
    )
  }
  
  export default ContentSectionHeader