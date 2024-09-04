import { Trash } from "phosphor-react";
import type { ICoffee } from "../../../../../../@types/coffee";
import { QuantitySelector } from "../../../../../../components/QuantitySelector";
import { useOrderContext } from "../../../../../../context/OrderContext";
import { ContainerItemList } from "./styles";

export function CoffeeList({ id, image, name, price, quantity }: ICoffee) {
	const {
		handleIncrementProduct,
		handleRemoveProduct,
		handleDecrementProduct,
	} = useOrderContext();

	function incrementCoffee() {
		handleIncrementProduct(id);
	}

	function decrementCoffee() {
		if (quantity === 1) return;

		handleDecrementProduct(id);
	}

	function removeCoffee() {
		handleRemoveProduct(id);
	}

	return (
		<ContainerItemList>
			<img src={image} alt={name} />

			<div>
				<span>{name}</span>

				<QuantitySelector
					add={incrementCoffee}
					remove={decrementCoffee}
					quantity={quantity}
				/>

				<button type="button" onClick={removeCoffee}>
					<Trash size={16} /> REMOVER
				</button>
			</div>

			<span>{price}</span>
		</ContainerItemList>
	);
}
