import { Wrapper } from "./Home.styles.js";
import { useState } from "react";
const Home = (props) => {
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <Wrapper>
      {props.items.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
            <input
              type="number"
              name=""
              id=""
              max="10"
              min="0"
              onChange={handleChange}
            />
            <br />
            <button onClick={() => props.addItem(item.id, quantity)}>
              Add item
            </button>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Home;
