import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: #252c34;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4); /* Cień */
  padding-block: 10px;
  @media (min-width: 768px) {
    padding-block: 40px;
  }
  p {
    margin: 0;
    color: #edece8;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #f1e4b4;
  }
`;
export const Container = styled.div`
  max-width: 1440px;
  padding-inline: 50px;
`;
