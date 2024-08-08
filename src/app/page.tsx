"use client";
import styled from "styled-components";

import Header from "../components/Header/Header";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { Description, InnerText } from "./page.styled";
import Footer from "../components/Footer/Footer";

const HomeContainer = styled.div`
  max-width: 1200px;
  flex:1;
  
  padding: 1rem;
  text-align: center;
`;
// Flexbox container for the whole page
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <HomeContainer>
        <Description>
          <InnerText>Diary</InnerText> <br /> record your thoughts like <br />{" "}
          in the old days...
        </Description>
        <RegisterForm />
      </HomeContainer>
      <Footer />
    </PageWrapper>
  );
};

export default Home;
