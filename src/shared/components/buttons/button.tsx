import { type ButtonProps, Button as NextUIButton } from "@nextui-org/react";

interface IButtonProps extends ButtonProps {}

const Button: React.FC<IButtonProps> = ({ ...props }) => {
  return <NextUIButton {...props}>{props.children}</NextUIButton>;
};

export default Button