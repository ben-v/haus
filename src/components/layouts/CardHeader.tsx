import parse from "html-react-parser";
import { ContentElementProps } from "./LayoutTypes";

export interface CardHeaderProps extends ContentElementProps {
    headerType?: "Header" | "Subheader",
}

const defaultProps = {
    headerType: "Header",
    titleAlignment: "Left",
    descriptionAlignment: "Left",
    
} satisfies Partial<CardHeaderProps>

const CardHeader = (props: CardHeaderProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    }

    const headerClassName: string = propsWithDefaults.headerType === "Header" ? "card-header-title" : "card-subheader-title";
    const titleAlignment: string = `card-header-header-align-${propsWithDefaults.titleAlignment.toLowerCase()}`;
    const descriptionAlignment: string = `card-header-description-align-${propsWithDefaults.descriptionAlignment.toLowerCase()}`;

    return (
        <div className="card-header-container">
            {propsWithDefaults.title ? <h2 className={`${headerClassName} ${titleAlignment}`}>{parse(propsWithDefaults.title.trim())}</h2> : ""}
            {propsWithDefaults.children ? <p className={`card-header-description body-text ${descriptionAlignment}`}>{propsWithDefaults.children}</p> : ""}
        </div>
    )
  }
  
  export default CardHeader