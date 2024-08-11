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
import { useEffect } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { selectToken, selectUser } from "../redux/auth/selectors";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const token = useSelector(selectToken);

  // useEffect(() => {
  //   const fullPath = `${pathname}?${searchParams.toString()}`;
  //   router.replace(fullPath);
  // }, [router, pathname, searchParams]);
  useEffect(() => {
    if (token) {
      router.push("/diary");
    }
  }, [token, router]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
