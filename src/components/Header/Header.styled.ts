import styled from "styled-components";

export const Background = styled.div`
  background-color: #252c34;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4); /* Cień */
  padding-block: 40px;
`;

export const Container = styled.div`
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1400px) {
    max-width: 1400px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  position: relative;
  z-index: 1; /* Ensure it's below the form */
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleDiary = styled.h1`
  font-family: "Allura", cursive;

  color: #f1e4b4;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-right: 10px;
  border-radius: 30%;
  box-shadow: -2px -2px 20px 14px #282117b0;

  @media (min-width: 768px) {
    width: 200px;
  }
`;

export const BtnLogout = styled.button`
 padding: 10px 20px;
    font-family: "Allura", cursive;
    font-size: 8px;
    background-color: #cfcbc0;
    color: #767267;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    width: auto;
    align-self: center;
    @media (min-width: 480px) {
      font-size: 16px;
    }
    &:hover {
      background-color: #b3aea1; /* Zmiana koloru tła na hover */
      color: #5e5a54; /* Zmiana koloru tekstu na hover */
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Zwiększenie cienia na hover */
    }
`