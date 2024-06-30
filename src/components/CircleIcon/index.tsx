import type { ReactNode } from "react";
import { CircleIconStyles } from "./styles";

interface CircleIconProps {
	icon: ReactNode;
	iconColor: string;
}

export function CircleIcon({ icon, iconColor, ...rest }: CircleIconProps) {
	return <CircleIconStyles iconcolor={iconColor}>{icon}</CircleIconStyles>;
}
