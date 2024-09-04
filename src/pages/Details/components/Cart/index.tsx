import { useOrderContext } from "../../../../context/OrderContext";
import { CoffeeList } from "./components/CoffeeList";
import {
	Button,
	FormContainer,
	PricesContainer,
	TotalContainer,
} from "./styles";

export function Cart() {
	const { products } = useOrderContext();
	return (
		<FormContainer>
			{products.map((coffee) => (
				<CoffeeList
					key={coffee.id}
					id={coffee.id}
					image={coffee.image}
					name={coffee.name}
					price={coffee.price}
					quantity={coffee.quantity}
				/>
			))}

			<TotalContainer>
				<PricesContainer>
					<span>Total de Itens</span>
					<span>R$ 33,20</span>
				</PricesContainer>

				<PricesContainer>
					<span>Entrega</span>
					<span>R$ 33,20</span>
				</PricesContainer>

				<PricesContainer isTotal>
					<span>Total</span>
					<span>R$ 33,20</span>
				</PricesContainer>
			</TotalContainer>

			<Button type="submit">CONFIRMAR PEDIDO</Button>
		</FormContainer>
	);
}
