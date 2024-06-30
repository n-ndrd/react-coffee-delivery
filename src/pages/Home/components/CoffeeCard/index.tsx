import {
	CardContainer,
	Currency,
	Description,
	ImgStyled,
	Price,
	PriceContainer,
	PriceValue,
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

			<TagsContainer></TagsContainer>

			<TextContainer>
				<Title>{name}</Title>
				<Description>{description}</Description>
			</TextContainer>

			<PriceContainer>
				<Price>
					<Currency>R$</Currency>
					<PriceValue>{priceFormatted}</PriceValue>
				</Price>

				{/* <Controls>
          <SelectQuantity 
            add={handleAddCoffeeQuantity}
            remove={handleRemoveCoffeeQuantity}
            quantity={coffeeQuantity}
          />
          <Button
            buttonType='buy'
            icon={<ShoppingCartSimple weight='fill' size={22} />}
            onClick={addCoffeeToCart}
          />
        </Controls> */}
			</PriceContainer>
		</CardContainer>
	);
}
