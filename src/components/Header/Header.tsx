import React from "react";
import {
  Background,
  BtnLogout,
  Container,
  HeaderContainer,
  Logo,
  LogoContainer,
  TitleDiary,
} from "./Header.styled";
import LoginForm from "../LoginForm/LoginForm";
import { usePathname } from "next/navigation";
import AddPost from "../AddPost/AddPost";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const user = useSelector(selectUser);

  return (
    <Background>
      <Container>
        <HeaderContainer>
          <LogoContainer>
            <TitleDiary>My Diary</TitleDiary>{" "}
            {isHomePage ? (
              <Logo src="/Logo2x.png" />
            ) : (
              <>
                <p>Cześć, {user.login}</p>
                <p>Liczba Wpisów</p>
                <BtnLogout>Logout</BtnLogout>
              </>
            )}
          </LogoContainer>
          {isHomePage ? <LoginForm /> : <AddPost />}
        </HeaderContainer>
      </Container>
    </Background>
  );
};

export default Header;
