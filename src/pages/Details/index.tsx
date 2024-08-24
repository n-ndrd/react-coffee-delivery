import { Cart } from "./components/Cart";
import { FormAddress } from "./components/Form";
import { Payment } from "./components/Payment";
import { Container, Title } from "./styles";

export function Details() {
	return (
		<Container>
			<div>
				<Title>Complete seu pedido</Title>
				<FormAddress />
				<Payment />
			</div>

			<div>
				<Title>Cafés selecionados</Title>
				<Cart />
			</div>
		</Container>
	);
}
