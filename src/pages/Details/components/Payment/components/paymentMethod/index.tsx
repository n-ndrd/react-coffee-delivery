import type { ReactNode } from "react";
import { Container, Text } from "./styles";

interface PaymentMethodProps {
	title: string;
	icon: ReactNode;
	focused: boolean;
	onFocus: () => void;
}

export function PaymentMethod({
	title,
	icon,
	focused,
	onFocus,
}: PaymentMethodProps) {
	return (
		<Container focused={focused} onClick={onFocus}>
			{icon}
			<Text>{title}</Text>
		</Container>
	);
}
