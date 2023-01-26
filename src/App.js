import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomerList from "./Components/CustomerList";
import OrderList from "./Components/OrderList";
import ItemList from "./Components/ItemList";
import LabelList from "./Components/LabelList";
import NewCustomerForm from "./NewCustomerForm";
import NewOrderForm from "./NewCustomerForm";
import NewItemForm from "./NewItemForm";
import NewLabelForm from "./NewCustomerForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
