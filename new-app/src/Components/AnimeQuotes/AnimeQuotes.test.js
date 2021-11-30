import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
import AnimeQuotes from "./AnimeQuotes";

it("Создание снепшота компонента AnimeQuotes", () => {
  const component = render(
    <Provider store={store}>
      <BrowserRouter>
        <AnimeQuotes />
      </BrowserRouter>
    </Provider>
  );
  expect(component).toMatchSnapshot();
});