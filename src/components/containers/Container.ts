export interface BaseContainerProps {
    containerClassNames?: string;
    padding?: "Large" | "Small" | "None";
    grow?: "Fill" | "Shrink";
}

export interface BaseContainerClassNames {
    containerClassNames: string;
    paddingClassNames: string;
    growClassNames: string;
}

const defaultProps = {
    containerClassNames: "",
    padding: "Large",
    grow: "Shrink",
} satisfies Partial<BaseContainerProps>

const getContainerPaddingClassNames = (props: BaseContainerProps): string => {
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
        containerClassNames: propsWithDefaults.containerClassNames,
        paddingClassNames: getContainerPaddingClassNames(propsWithDefaults),
        growClassNames: getContainerGrowClassNames(propsWithDefaults)
    };

    return classNames;
}