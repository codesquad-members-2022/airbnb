import CalendarProvider from "Context/CalendarProvider";
import HeadCountProvider from "Context/HeadCountProvider";
import GlobalStyle from "Helpers/globalStyle";
import { composeProvider } from "Helpers/utils";
import Home from "Pages/Home/Home";
import React from "react";

const providerList = [CalendarProvider, HeadCountProvider];

const Provider = composeProvider(providerList);

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
