import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";

interface QuantitySelectorProps {
	add: () => void;
	remove: () => void;
	quantity: number;
}

export function QuantitySelector({
	add,
	remove,
	quantity,
}: QuantitySelectorProps) {
	<Container>
		<Minus weight="fill" size={14} onClick={remove} type="button" />
		<span>{quantity}</span>
		<Plus weight="fill" size={14} onClick={add} type="button" />
	</Container>;
}
