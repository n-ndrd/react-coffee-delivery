import { ShoppingCart } from "phosphor-react";
import { QuantitySelector } from "../../../../components/QuantitySelector";
import {
	Button,
	CardContainer,
	Controls,
	Currency,
	Description,
	ImgStyled,
	Price,
	PriceContainer,
	PriceValue,
	Tag,
	TagsContainer,
	TextContainer,
	Title,
} from "./styles";

interface CoffeeCardProps {
	id: number;
	image: string;
	name: string;
	description: string;
	price: number;
	tags: string[];
}

export function CoffeeCard({
	id,
	image,
	description,
	name,
	price,
	tags,
}: CoffeeCardProps) {
	const priceFormatted = new Intl.NumberFormat("pt-BR", {
		minimumFractionDigits: 2,
	}).format(price);

	return (
		<CardContainer>
			<ImgStyled src={image} alt={name} />

			<TagsContainer>
				{tags.map((tag) => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</TagsContainer>

			<TextContainer>
				<Title>{name}</Title>
				<Description>{description}</Description>
			</TextContainer>

			<PriceContainer>
				<Price>
					<Currency>R$</Currency>
					<PriceValue>{priceFormatted}</PriceValue>
				</Price>

				<Controls>
					<QuantitySelector
					// add={}
					// remove={}
					// quantity={}
					/>
					<Button type="button">
						<ShoppingCart weight="fill" size={22} />
					</Button>
				</Controls>
			</PriceContainer>
		</CardContainer>
	);
}
