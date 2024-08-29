import { MapPinLine } from "phosphor-react";
import {
	ContainerInputs,
	FormContainer,
	Header,
	Input,
	MultiInputs,
	Subtitle,
	Title,
} from "./styles";

export function FormAddress() {
	return (
		<FormContainer>
			<Header>
				<MapPinLine size={22} />
				<div>
					<Title>Endereço de Entrega</Title>
					<Subtitle>Informe o endereço onde deseja receber o pedido</Subtitle>
				</div>
			</Header>

			<ContainerInputs>
				<Input type="text" placeholder="CEP" width="200px" />

				<Input type="text" placeholder="Rua" width="100%" />

				<MultiInputs>
					<Input type="text" placeholder="Número" />
					<Input type="text" placeholder="Complemento" width="100%" />
				</MultiInputs>

				<MultiInputs>
					<Input type="text" placeholder="Bairro" width="200px" />
					<Input type="text" placeholder="Cidade" width="100%" />
					<Input type="text" placeholder="UF" width="80px" />
				</MultiInputs>
			</ContainerInputs>
		</FormContainer>
	);
}
