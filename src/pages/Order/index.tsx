import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import imgDelivery from "../../assets/delivery.svg";
import { CircleIcon } from "../../components/CircleIcon";
import {
	Container,
	Content,
	Header,
	InfoContainer,
	OrderInfoContainer,
	Subtitle,
	Title,
} from "./styles";

export function Order() {
	const theme = useTheme();

	return (
		<Container>
			<Header>
				<div>
					<Title>Uhu! Pedido Confirmado</Title>
					<Subtitle>Agora é só aguardar que logo seu café chegará</Subtitle>
				</div>
			</Header>

			<Content>
				<OrderInfoContainer>
					<InfoContainer>
						<CircleIcon
							iconColor={theme.purple}
							icon={<MapPin weight="fill" size={16} />}
						/>
						<div>
							<p>Entrega em Rua Minervino Souza Fontes, 452</p>
							<p>Salgado Filho, Aracaju-SE</p>
						</div>
					</InfoContainer>

					<InfoContainer>
						<CircleIcon
							iconColor={theme.yellow}
							icon={<Timer weight="fill" size={16} />}
						/>
						<div>
							<p>Previsão de Entrega</p>
							<p>20 min - 30 min</p>
						</div>
					</InfoContainer>

					<InfoContainer>
						<CircleIcon
							iconColor={theme["yellow-dark"]}
							icon={<CurrencyDollar weight="fill" size={16} />}
						/>
						<div>
							<p>Pagamento na entrega</p>
							<p>Dinheiro</p>
						</div>
					</InfoContainer>
				</OrderInfoContainer>

				<img src={imgDelivery} alt="imagem delivery" />
			</Content>
		</Container>
	);
}
