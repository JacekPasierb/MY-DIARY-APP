"use client";
import styled from "styled-components";

import Header from "../components/Header/Header";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { Description, InnerText } from "./page.styled";

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Description>
         <InnerText>Diary</InnerText>  record your thoughts like in the old days...
        </Description>
        <RegisterForm />
      </HomeContainer>
    </>
  );
};

export default Home;
