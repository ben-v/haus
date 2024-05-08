import { ButtonLinkProps } from './ButtonLinkProps';
import { defaultProps, getButtonBody } from './CommonLinkProps';

const ButtonLink = (props: ButtonLinkProps) => {
  const propsWithDefaults = {
    ...defaultProps,
    ...props
  }

  return (
    <button {...props} className={`${propsWithDefaults.className} button-${propsWithDefaults.size.toLowerCase()}`}>
      {getButtonBody(props)}
    </button>
  )
}

export default ButtonLink
