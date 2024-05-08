import { Link } from 'react-router-dom';
import { NavLinkProps } from './NavLinkProps';
import { defaultProps, getButtonBody } from './CommonLinkProps';

const defaultNavLinkProps = {
  isExternalRoute: false,
  target: "_self",
} satisfies Partial<NavLinkProps>


const NavLink = (props: NavLinkProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...defaultNavLinkProps,
    ...props
  }
  const buttonClassName: string = `${propsWithDefaults.className} button-${defaultProps.size.toLowerCase()}`;

  return (
        <>
          {
            propsWithDefaults.isExternalRoute ?
              <a href={propsWithDefaults.url} target={propsWithDefaults.target} className={buttonClassName}>
                {getButtonBody(props)}
              </a>
              :
              <Link to={propsWithDefaults.url ? propsWithDefaults.url : ""} target={propsWithDefaults.target} className={buttonClassName}>
                {getButtonBody(props)}
              </Link>
          }
        </>
  )
}

export default NavLink
