"use client";
import styled from "styled-components";
import LoginForm from "../components/LoginForm/LoginForm";
import Header from "../components/Header/Header";

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
`;

const HomeTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeTitle>Welcome to My Diary</HomeTitle>
        <LoginForm />
      </HomeContainer>
    </>
  );
};

export default Home;
