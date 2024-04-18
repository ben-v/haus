export type ContentAlignment = "Left" | "Center" | "Right";

export interface ContentElementProps {
    title: string,
    description?: string,
    titleAlignment?: ContentAlignment;
    descriptionAlignment?: ContentAlignment;
}
