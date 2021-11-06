import { Link } from "react-router-dom";
import { Wrapper, Content, Links } from "./Nav.styles";

const Nav = () => (
  <Wrapper>
    <Content>
      <a href="#">LOGO</a>
      <Links>
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>
      </Links>
    </Content>
  </Wrapper>
);

export default Nav;
