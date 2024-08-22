import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
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
import { useOrderContext } from "../../../../context/OrderContext";
import { addProductAction } from "../../../../reducers/order/actions";

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
	const [qtdCoffee, setQtdCoffee] = useState(1);
	const { handleAddNewProduct } = useOrderContext();

	const priceFormatted = new Intl.NumberFormat("pt-BR", {
		minimumFractionDigits: 2,
	}).format(price);

	function handleAddCoffeeQuantity() {
		setQtdCoffee((state) => state + 1);
	}

	function handleRemoveCoffeeQuantity() {
		if (qtdCoffee === 1) return;

		setQtdCoffee((state) => state - 1);
	}

	function addCoffeeInOrder(){
		const coffee = {
			id,
			image,
			name,
			price,
			quantity: qtdCoffee
		}
		console.log("🚀 ~ addCoffeeInOrder ~ coffee:", coffee)
		

		handleAddNewProduct(coffee);
		setQtdCoffee(1);
	}

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
						add={handleAddCoffeeQuantity}
						remove={handleRemoveCoffeeQuantity}
						quantity={qtdCoffee}
					/>
					<Button type="button" onClick={addCoffeeInOrder}>
						<ShoppingCart weight="fill" size={22} />
					</Button>
				</Controls>
			</PriceContainer>
		</CardContainer>
	);
}
