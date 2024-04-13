interface PageSectionProps {
    id: string;
    width?: "Wide" | "Standard";
    children: React.ReactNode;
}

const defaultProps = {
  width: "Standard"
} satisfies Partial<PageSectionProps>

const PageSection = (props: PageSectionProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
}
  let widthClasses: string = "";

  if (props.width && (props.width === "Wide")) {
    widthClasses = "px-4 md:px-6 xl:max-w-6xl";
  } else {
    widthClasses = "px-12 md:px-4 xl:max-w-5xl";
  }

  return (
    <section id={propsWithDefaults.id} className="overflow-x-clip pt-24 lg:pt-32 pb-10">
      <div className={`mx-auto ${widthClasses} xl:px-0`}>
        {props.children}
      </div>
    </section>
  )
}

export default PageSection
