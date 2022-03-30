import { configureStore } from "@reduxjs/toolkit";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import countrySliceReducer from "./features/countryStorage";
import CountryCard from "./components/CountryCard";
import SearchBar from "./components/SearchBar";

import App from "./App";

const store = configureStore({
  reducer: {
    countries: countrySliceReducer,
  },
});

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<SearchBar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  rootElement
);
