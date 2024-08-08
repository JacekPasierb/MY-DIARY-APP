import styled from "styled-components";

export const SectionRegister = styled.div`
  position: absolute;
  top: 42%;
  left: 75%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 400px;
  background-color: #e8ddcb;
  padding: 2rem;
  box-shadow: 0px -25px 3px -14px #e8ddcb73, 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-color: #b7ac9a;

  form {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
  }
  label {
    font-family: "Allura", cursive;
    color: #bbbab4;
    text-align: left;
    margin-bottom: 10px;
  }
  input {
    background-color: transparent;
    outline: none;
    border: 2px solid #d0c8be;
    border-radius: 10px;
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
    align-self: flex-end;
  }
`;

export const TitleForm = styled.h2`
  font-family: "Allura", cursive;
  color: #4d474c;
`;

export const LineShort = styled.div`
  height: 2px;
  width: 100%;
  background-color: #f1e8d9;
  margin-block: 10px;
`;

export const LineLong = styled.div`
  height: 2px;
  width: 100%;
  background-color: #c9c0af;
  margin-block: 10px;
`;
export const LineInner = styled.div``;

export const ContainerField = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ContainerTitle = styled.div``;
export const ErrorText = styled.div`
  font-family: "Allura", cursive;
  color: red;
  font-size: 0.8rem;
  text-align: left;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;
