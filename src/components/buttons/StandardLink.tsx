import { Link } from 'react-router-dom';
import { NavLinkProps } from '../../navigation/NavLinkProps';

// export interface StandardLinkProps extends ExtendedNavLinkProps {
//     children?: ReactNode;
// }

const defaultProps = {
    url: "/",
    isExternalRoute: false,
    target: "_self",
} satisfies Partial<NavLinkProps>

const StandardLink = (props: NavLinkProps) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props
    }

    return (
        <>
            {propsWithDefaults.isExternalRoute ?
                <a href={propsWithDefaults.url} target={propsWithDefaults.target}>
                    {propsWithDefaults.children}
                </a>
                :
                <Link to={propsWithDefaults.url} target={propsWithDefaults.target}>
                    {propsWithDefaults.children}
                </Link>
            }
        </>
    )
}

export default StandardLink
