export interface BaseContainerProps {
    id?: string;
    containerClassNames?: string;
    bodyClassNames?: string;
    padding?: "Large" | "Small" | "None";
    grow?: "Fill" | "Shrink";
}

export interface BaseContainerClassNames {
    containerClassNames: string;
    bodyClassNames: string;
    // paddingClassNames: string;
    // growClassNames: string;
}

const defaultProps = {
    containerClassNames: "",
    bodyClassNames: "",
    padding: "None",
    grow: "Shrink",
} satisfies Partial<BaseContainerProps>

const getContainerBodyPaddingClassNames = (props: BaseContainerProps): string => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    };

    let classNames: string = "";

    switch(propsWithDefaults.padding) {
        case ("Small"): {
            classNames = "space-y-3 p-4 sm:p-6";
            break;
        }
        case ("None"): {
            break;
        }
        case ("Large"):
        default: {
            classNames = "space-y-6 p-8 sm:p-12";
            break;
        }
    }

    return classNames;
}

const getContainerGrowClassNames = (props: BaseContainerProps): string => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    };

    let classNames: string = "";

    if (propsWithDefaults.grow && (propsWithDefaults.grow === "Fill")) {
        classNames = "md:flex-grow";
    } else {
        classNames = "";
    }

    return classNames;
}

export const GetContainerClassNamesFromProps = (props: BaseContainerProps): BaseContainerClassNames => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    };

    let classNames: BaseContainerClassNames = {
        containerClassNames: `${propsWithDefaults.containerClassNames} ${getContainerGrowClassNames(propsWithDefaults)}`,
        bodyClassNames: `${propsWithDefaults.bodyClassNames} ${getContainerBodyPaddingClassNames(propsWithDefaults)}`,
    };

    return classNames;
}