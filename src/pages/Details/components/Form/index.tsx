import { MapPinLine } from "phosphor-react";
import { FormContainer, Header, Subtitle, Title } from "./styles";

export function FormAddress() {
	return (
		<FormContainer>
			<Header>
				<MapPinLine size={22} />

				<Title>Endereço de Entrega</Title>
				<Subtitle>Informe o endereço onde deseja receber o pedido</Subtitle>
			</Header>
			<input type="text" placeholder="CEP" />
		</FormContainer>
	);
}
