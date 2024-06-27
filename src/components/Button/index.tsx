import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "./styles";

export type TypesButton = "default" | "buy" | "clean" | "cart";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: ReactNode;
	label?: string;
	buttonType: TypesButton;
}

export function Button({ label, icon, buttonType, ...rest }: ButtonProps) {
	return (
		<ButtonStyled
			buttonType={buttonType}
			hasIconAndLabel={!!icon && !!label}
			{...rest}
		>
			{label} {icon}
		</ButtonStyled>
	);
}
