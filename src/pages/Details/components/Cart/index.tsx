import { CoffeeList } from "./components/CoffeeList";
import {
	Button,
	FormContainer,
	PricesContainer,
	TotalContainer,
} from "./styles";

export function Cart() {
	return (
		<FormContainer>
			<CoffeeList />

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
