'use client'
import { Button as BaseButtonfrom } from "@/shared/components/buttons";
import { type ButtonProps } from "@nextui-org/button";
import React from "react";

interface IBSPButtonProps extends ButtonProps {
  rightIcon?: React.ReactNode;
}

export const BSPButton = ({
  children,
  className,
  onPress,
  rightIcon,
}: IBSPButtonProps) => {
  return (
    <BaseButtonfrom className={className} onPress={onPress}>
      {children}
      {rightIcon}
    </BaseButtonfrom>
  );
};
