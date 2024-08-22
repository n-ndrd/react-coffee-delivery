import { coffeesDatas } from "../../coffees";
import { Banner } from "./components/Banner";
import { CoffeeCard } from "./components/CoffeeCard";
import { Coffees, Container, ContainerCoffees, Title } from "./styles";

export function Home() {
	return (
		<Container>
			<Banner />

			<ContainerCoffees>
				<Title>Nossos Cafés</Title>

				<Coffees>
					{coffeesDatas.map((coffee) => (
						<CoffeeCard
							key={coffee.id}
							id={coffee.id}
							image={coffee.image}
							name={coffee.name}
							description={coffee.description}
							price={coffee.price}
							tags={coffee.tags}
						/>
					))}
				</Coffees>
			</ContainerCoffees>
		</Container>
	);
}
