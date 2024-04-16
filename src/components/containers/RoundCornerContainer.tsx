import { ReactNode } from 'react';

export interface RoundCornerContainerProps {
  width?: "Auto" | "Fixed";
  useGradientBackground?: boolean;
  children: ReactNode;
}

const defaultProps = {
  width: "Auto",
  useGradientBackground: true
} satisfies Partial<RoundCornerContainerProps>

const RoundCornerContainer = (props: RoundCornerContainerProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }

  let widthClassNames: string = "";

  if (propsWithDefaults.width && (propsWithDefaults.width === "Auto")) {
    widthClassNames = "w-auto";
  } else {
    widthClassNames = "md:mx-0 md:w-6/12 lg:w-5/12";
  }

  return (
    <div className={`relative z-10 -mx-2 rounded-3xl border border-gray-200 bg-gray-50 shadow-2xl shadow-gray-600/10 dark:border-gray-700/60 dark:bg-gray-800 dark:shadow-none ${widthClassNames}`}>
      {propsWithDefaults.useGradientBackground ? <div className="absolute inset-0 hidden scale-100 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/70"></div> : ""}
      <div className="space-y-6 p-8 sm:p-12">
        {props.children}
      </div>
    </div>
  );
};

export default RoundCornerContainer;
