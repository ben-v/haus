import { ReactNode } from "react";

export type ContentAlignment = "Left" | "Center" | "Right";

export interface ContentElementProps {
    title?: string,
    children?: ReactNode;
    titleAlignment?: ContentAlignment;
    descriptionAlignment?: ContentAlignment;
}
