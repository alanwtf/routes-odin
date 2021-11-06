import { Wrapper } from "./Cart.styles";

const Cart = (props) => {
  return props.items.map((item) => {
    return (
      <Wrapper>
        <h1>{item.title}</h1>
        <p>{item.text}</p>
        <p>Quantity: {item.qty}</p>
        <p>Price: {item.price}</p>
        <p>Subtotal: {item.price * item.qty}</p>
      </Wrapper>
    );
  });
};

export default Cart;
