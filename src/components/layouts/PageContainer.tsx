interface PageContainerProps {
    id: string;
    width?: "Wide" | "Standard";
    children: React.ReactNode;
}

const defaultProps = {
  width: "Standard"
} satisfies Partial<PageContainerProps>

const PageContainer = (props: PageContainerProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
}
  let widthClassName: string = (props.width && (props.width === "Wide")) ? "page-wide-width" : "page-standard-width";

  return (
    <section id={propsWithDefaults.id} className="page-container">
      <div className={widthClassName}>
        {props.children}
      </div>
    </section>
  )
}

export default PageContainer
