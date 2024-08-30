import { useNavigate } from "react-router-dom";
import { Cart } from "./components/Cart";
import { FormAddress } from "./components/Form";
import { Payment } from "./components/Payment";
import { DetailsContainer, Title } from "./styles";

export function Details() {
	const navigate = useNavigate();

	function handleFormSubmit() {
		navigate("/order");
	}

	return (
		<DetailsContainer onSubmit={handleFormSubmit}>
			<div>
				<Title>Complete seu pedido</Title>
				<FormAddress />
				<Payment />
			</div>

			<div>
				<Title>Cafés selecionados</Title>
				<Cart />
			</div>
		</DetailsContainer>
	);
}
