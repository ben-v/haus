import { Link } from 'react-router-dom'
import { LinkProps } from "./LinkProps";

const defaultProps = {
    url: "/",
    title: "Default Link Title"
} satisfies Partial<LinkProps>

const ButtonLink = (props: LinkProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    }

  return (
    <Link to={`${propsWithDefaults.url}`} className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
        <span className="relative text-base font-semibold text-white dark:text-dark">{`${propsWithDefaults.title}`}</span>
    </Link>
  )
}

export default ButtonLink
