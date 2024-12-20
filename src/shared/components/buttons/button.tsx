import { type ButtonProps, Button as NextUIButton } from "@nextui-org/react";

interface IButtonProps extends ButtonProps {
  rightIcon?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ rightIcon, ...props }) => {
  return (
    <NextUIButton {...props}>
      {props.children}
      {rightIcon}
    </NextUIButton>
  );
};

export default Button;
