export interface IconSize {
    width: number,
    height: number
}

const DEFAULT_ICON_SIZE: IconSize = {width: 32, height: 32};

export const ICON_SIZES: {default: IconSize, sm: IconSize, md:IconSize, lg: IconSize, xl: IconSize, "2xl": IconSize } = {
    // Unable to find out quickly how to init multiple properties, i.e. default and lg, at once. This is workaround as of 4/28/24.
    default: {
        width: DEFAULT_ICON_SIZE.width,
        height: DEFAULT_ICON_SIZE.height
    },
    sm: {
        width: 16,
        height: 16
    },
    md: {
        width: 24,
        height: 24
    },
    // Unable to find out quickly how to init multiple properties, i.e. default and lg, at once. This is workaround as of 4/28/24.
    lg: {
        width: DEFAULT_ICON_SIZE.width,
        height: DEFAULT_ICON_SIZE.height
    },
    xl: {
        width: 48,
        height: 48
    },
    "2xl": {
        width: 64,
        height: 64
    },
}