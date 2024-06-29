import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/Logo.png";
import { Button, Container, Location } from "./styles";

export function Header() {
	return (
		<Container>
			<Link to="/home">
				<img src={imgLogo} alt="Logo Coffee Delivery" />
			</Link>
			<div>
				<Location>
					<MapPin weight="fill" size={25} />
					<span>Aracaju, SE</span>
				</Location>

				<Button type="button">
					<ShoppingCart weight="fill" size={22} />
				</Button>
			</div>
		</Container>
	);
}
