import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/Logo.png";
import { useOrderContext } from "../../context/OrderContext";
import { Button, Container, Location, QuantityIndicator } from "./styles";

export function Header() {
	const { products } = useOrderContext();

	const totalProductsInOrder = products.reduce((prev, current) => {
		return prev + current.quantity;
	}, 0);

	return (
		<Container>
			<Link to="/">
				<img src={imgLogo} alt="Logo Coffee Delivery" />
			</Link>
			<div>
				<Location>
					<MapPin weight="fill" size={25} />
					<span>Aracaju, SE</span>
				</Location>

				<Link to="/details">
					<QuantityIndicator>{totalProductsInOrder}</QuantityIndicator>
					<Button type="button">
						<ShoppingCart weight="fill" size={22} />
					</Button>
				</Link>
			</div>
		</Container>
	);
}
