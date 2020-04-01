import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppNavbar from "./components/header/Navbar";
import ShoppingList from "./components/body/ShoppingList";
import ItemModel from "./components/body/ItemModal";
import { Container } from "reactstrap";

import { loadUser } from "./actions/authActions";

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar></AppNavbar>
        <Container>
          <ItemModel></ItemModel>
          <ShoppingList></ShoppingList>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
