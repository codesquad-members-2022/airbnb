// import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "Styles/theme";

import GlobalStyle from "Styles";
import Router from "Router";

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Router />

				{/* <Outlet /> */}
				{/* 추후 Main part 생성 후 적용 */}
			</ThemeProvider>
		</div>
	);
};

export default App;
