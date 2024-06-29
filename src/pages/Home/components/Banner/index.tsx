import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import bannerBackground from "../../../../assets/banner-background.svg";
import imgCoffee from "../../../../assets/coffee.svg";
// import { CircleIcon } from "../../../../components/CircleIcon";
import {
	// CircleIconStyles,
	ContainerBanner,
	// ContentList,
	ContentText,
	SubTitle,
	Title,
} from "./styles";

const items = [
	{
		label: "Compra simples e segura",
		icon: <ShoppingCart weight="fill" />,
		color: "yellow-dark",
	},
	{
		label: "Embalagem mantém o café intacto",
		icon: <Package weight="fill" />,
		color: "base-text",
	},
	{
		label: "Entrega rápida e rastreada",
		icon: <Timer weight="fill" />,
		color: "yellow",
	},
	{
		label: "O café chega fresquinho até você",
		icon: <Coffee weight="fill" />,
		color: "purple",
	},
];

export function Banner() {
	return (
		<ContainerBanner background={bannerBackground}>
			<ContentText>
				<Title>Encontre o café perfeito para qualquer hora do dia</Title>
				<SubTitle>
					Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
					hora
				</SubTitle>
			</ContentText>

			{/* <ContentList>
				{items.map((data, index) => (
					<div key={index}>
						<div>
							<CircleIconStyles colorCircle={theme[data.color]} />
							{data.icon}
						</div>
						<CircleIcon iconColor={theme[data.color]} icon={data.icon} />
						<span>{data.label}</span>
					</div>
				))}
			</ContentList> */}

			<img src={imgCoffee} alt="Coffee" />
		</ContainerBanner>
	);
}
