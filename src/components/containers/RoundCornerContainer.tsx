import { ReactNode } from 'react';
import { BaseContainerProps, BaseContainerClassNames, GetContainerClassNamesFromProps } from './Container';

export interface RoundCornerContainerProps extends BaseContainerProps {
  useGradientBackground?: boolean;
  children: ReactNode;
}

const defaultProps = {
  padding: "Large",
  useGradientBackground: true
} satisfies Partial<RoundCornerContainerProps>

const RoundCornerContainer = (props: RoundCornerContainerProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }

  const classNames: BaseContainerClassNames = GetContainerClassNamesFromProps(propsWithDefaults);

  return (
    <div id={props.id ? props.id : ""} className={`relative z-10 rounded-3xl border border-gray-200 bg-gray-50 shadow-2xl shadow-gray-600/10 dark:border-gray-700/60 dark:bg-gray-800 dark:shadow-none w-full ${classNames.containerClassNames}`}>
      {propsWithDefaults.useGradientBackground ? <div className="absolute inset-0 hidden scale-100 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/70"></div> : ""}
      <div className={`relative z-20 flex flex-col h-full ${classNames.bodyClassNames}`}>
        {props.children}
      </div>
    </div>
  );
};

export default RoundCornerContainer;
