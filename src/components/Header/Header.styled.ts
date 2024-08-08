import styled from "styled-components";

export const Background = styled.div`
  background-color: #252c34;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4); /* Cień */
`;

export const Container = styled.div`
  max-width: 1440px;
  padding: 50px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  position: relative;
  z-index: 1; /* Ensure it's below the form */
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
  width: 200px;
  height: auto;
  margin-right: 10px;
  border-radius: 30%;
  box-shadow: -2px -2px 20px 14px #282117b0;
`;
