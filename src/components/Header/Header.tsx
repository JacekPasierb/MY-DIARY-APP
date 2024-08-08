import React from "react";
import {
  Background,
  Container,
  HeaderContainer,
  Logo,
  LogoContainer,
  TitleDiary,
} from "./Header.styled";
import LoginForm from "../LoginForm/LoginForm";
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <Background>
      <Container>
        <HeaderContainer>
          <LogoContainer>
            <TitleDiary>My Diary</TitleDiary> <Logo src="/Logo2x.png" />
          </LogoContainer>
          {isHomePage && <LoginForm />}  
        </HeaderContainer>
      </Container>
    </Background>
  );
};

export default Header;
