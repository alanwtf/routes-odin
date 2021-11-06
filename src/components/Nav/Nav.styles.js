import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  padding: 20px 0;
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;

  a {
    text-decoration: none;
    color: #242424;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`;
