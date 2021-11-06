import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import Nav from "./components/Nav";

const obj = [
  {
    title: "item1",
    text: "hola",
    id: 0,
    price: 50,
  },
  {
    title: "item2",
    text: "hola",
    id: 1,
    price: 100,
  },
  {
    title: "item3",
    text: "hola",
    id: 2,
    price: 80,
  },
  {
    title: "item4",
    text: "hola",
    id: 3,
    price: 22,
  },
  {
    title: "item5",
    text: "hola",
    id: 4,
    price: 54,
  },
  {
    title: "item6",
    text: "hola",
    id: 5,
    price: 5,
  },
  {
    title: "item7",
    text: "hola",
    id: 6,
    price: 69,
  },
  {
    title: "item8",
    text: "hola",
    id: 7,
    price: 420,
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addItem = (id, qty) => {
    console.log(cart);

    const newItem = obj.find((el) => {
      return el.id === id;
    });

    newItem.qty = qty;
    if (newItem.qty < 1) {
      alert("QUANTITY MUST BE AT LEAST 1");
      //if item already exists on cart
    } else if (cart.filter((item) => item.id === newItem.id).length > 0) {
      //find index of item in cart
      const index = cart.findIndex((el) => el.id === id);
      console.log("ANTES DE AHACER NADA" + cart[index].qty);
      //copy carts items to new array
      const items = [...cart];
      //copy item to new object
      const item = { ...items[index] };
      item.qty += qty;
      items[index] = item;
      setCart(items);
      console.log("replace");
      console.log(parseInt(item.qty) + " " + parseInt(qty));
    } else {
      console.log("concat");
      setCart(cart.concat(newItem));
    }
  };

  useEffect(() => {
    if (cart.length > 0) alert("item added!");
    console.log(cart);
  }, [cart]);

  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Routes>
          <Route
            path="/home"
            element={<Home items={obj} addItem={addItem} />}
          />
          <Route path="/cart" element={<Cart items={cart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
