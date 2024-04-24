export interface BaseContainerProps {
    // width?: "Auto" | "Fixed" | "Full" | "25%" | "50%" | "75%" | "100%";
    padding?: "Large" | "Small";
    grow?: "Fill" | "Shrink";
}

export interface BaseContainerClassNames {
    // widthClassNames: string;
    paddingClassNames: string;
    growClassNames: string;
}

const defaultProps = {
    // width: "Full",
    padding: "Large",
    grow: "Shrink",
} satisfies Partial<BaseContainerProps>

// const getContainerWidthClassNames = (props: BaseContainerProps): string => {
//     const propsWithDefaults = {
//         ...defaultProps,
//         ...props
//     };

//     let classNames: string = "";

//     switch (propsWithDefaults.width) {
//         case "Fixed": {
//             classNames = "md:mx-0 md:w-6/12 lg:w-5/12";
//             break;
//         }
//         case "25%": {
//             classNames = "w-1/4";
//             break;
//         }
//         case "50%": {
//             classNames = "w-2/4";
//             break;
//         }
//         case "75%": {
//             classNames = "w-3/4";
//             break;
//         }
//         case "Auto": {
//             classNames = "w-auto";
//             break;
//         }
//         case "Full":
//         case "100%":
//         default: {
//             classNames = "w-full";
//             break;
//         }
//     }

//     return classNames;
// }

const getContainerPaddingClassNames = (props: BaseContainerProps): string => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    };

    let classNames: string = "";

    if (propsWithDefaults.padding && (propsWithDefaults.padding === "Large")) {
        classNames = "space-y-6 p-8 sm:p-12";
    } else {
        classNames = "space-y-3 p-4 sm:p-6";
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
        // widthClassNames: getContainerWidthClassNames(propsWithDefaults),
        paddingClassNames: getContainerPaddingClassNames(propsWithDefaults),
        growClassNames: getContainerGrowClassNames(propsWithDefaults)
    };

    return classNames;
}