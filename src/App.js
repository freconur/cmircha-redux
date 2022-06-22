import React from "react";
import { Provider } from "react-redux";
import { Contador } from "./contador";
import { TeoriaRedux } from "./Redux/components/TeoriaRedux";
import { store } from "./Redux/store";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <h1>shopping Cart con reducer</h1>
        <ShoppingCart/>
        <hr/>
      <h1>Redux</h1>
      <Contador/>
      <hr/>
      <TeoriaRedux/>
    </Provider>
    </div>
  );
};

export default App;
