import { ReactNode } from 'react';

export interface RoundCornerContainerProps {
  width?: "Auto" | "Fixed" | "Full" | "25%" | "50%" | "75%" | "100%";
  padding?: "Large" | "Small";
  grow?: "Fill" | "Shrink";
  useGradientBackground?: boolean;
  children: ReactNode;
}

const defaultProps = {
  width: "Full",
  padding: "Large",
  grow: "Shrink",
  useGradientBackground: true
} satisfies Partial<RoundCornerContainerProps>

const RoundCornerContainer = (props: RoundCornerContainerProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }

  let widthClassNames: string = "";
  let paddingClassNames: string = "";
  let growClassNames: string = "";

  switch (propsWithDefaults.width) {
    case "Fixed": {
      widthClassNames = "md:mx-0 md:w-6/12 lg:w-5/12";
      break;
    }
    case "25%": {
      widthClassNames = "w-1/4";
      break;
    }
    case "50%": {
      widthClassNames = "w-2/4";
      break;
    }
    case "75%": {
      widthClassNames = "w-3/4";
      break;
    }
    case "Auto": {
      widthClassNames = "w-auto";
      break;
    }
    case "Full":
    case "100%":
    default: {
      widthClassNames = "w-full";
      break;
    }
  }

  if (propsWithDefaults.padding && (propsWithDefaults.padding === "Large")) {
    paddingClassNames = "space-y-6 p-8 sm:p-12";
  } else {
    paddingClassNames = "space-y-3 p-4 sm:p-6";
  }

  if (propsWithDefaults.grow && (propsWithDefaults.grow === "Fill")) {
    growClassNames = "md:flex-grow";
  } else {
    growClassNames = "";
  }

  return (
    <div className={`relative z-10 rounded-3xl border border-gray-200 bg-gray-50 shadow-2xl shadow-gray-600/10 dark:border-gray-700/60 dark:bg-gray-800 dark:shadow-none ${growClassNames} ${widthClassNames}`}>
      {propsWithDefaults.useGradientBackground ? <div className="absolute inset-0 hidden scale-100 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/70"></div> : ""}
      <div className={`relative z-11 flex flex-col h-full ${paddingClassNames}`}>
        {props.children}
      </div>
    </div>
  );
};

export default RoundCornerContainer;
