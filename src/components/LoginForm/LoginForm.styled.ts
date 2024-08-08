import styled from "styled-components";

export const SectionForm = styled.div`
  border: 4px solid #857d6d; /* Grubsza linia na zewnątrz */
  border-bottom-color: #41403c; /* Dodatkowy kolor na dole */
  box-shadow: 0px 0px 30px rgba(5, 0, 0, 0.3); /* Cień */
  background-color: #60615c;
  border-radius: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-block: 10px;

  padding-inline: 20px;

  form {
    display: flex;
    flex-direction: row;
  }
  label {
    font-family: "Allura", cursive;
    color: #bbbab4;
  }
  input {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 10px;
  }
  button {
    padding: 10px 20px;
    font-family: "Allura", cursive;
    font-size: 16px;
    background-color: #cfcbc0;
    color: #767267;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    width: auto;
    align-self: center;
  }
  div {
    color: red;
  }
`;

export const TitleForm = styled.h2`
  font-family: "Allura", cursive;
  color: #bbbab4;
`;

export const LineShort = styled.div`
  height: 2px;
  width: 20%;
  background-color: #71706c;
  margin-block: 10px;
`;

export const LineLong = styled.div`
  height: 2px;
  width: 60%;
  background-color: #71706c;
  margin-block: 10px;
`;
export const LineInner = styled.div`
  height: 2px;
  width: 60%;
  background-color: #7f6c61;
  margin-block: 10px;
`;

export const ContainerField = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
