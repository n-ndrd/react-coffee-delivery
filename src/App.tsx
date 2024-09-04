import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { OrderProvider } from "./context/OrderContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
	return (
		<BrowserRouter>
			<OrderProvider>
				<ThemeProvider theme={defaultTheme}>
					<Router />
					<GlobalStyle />
				</ThemeProvider>
			</OrderProvider>
		</BrowserRouter>
	);
}

export default App;
