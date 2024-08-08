"use client";
import styled from "styled-components";

import Header from "../components/Header/Header";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import {
  Description,
  HomeContainer,
  InnerText,
  PageWrapper,
} from "./page.styled";
import Footer from "../components/Footer/Footer";

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
