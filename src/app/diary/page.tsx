// pages/diary.js
"use client";

import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DiaryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  flex: 1;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Diary = () => {
  const  isLoggedIn  = useSelector(selectIsLoggedIn);  
  const router = useRouter();
  useEffect(()=>{
    if (!isLoggedIn) {
      router.push('/');
    }
  },[isLoggedIn, router])

  if (!isLoggedIn) {
    return <p>Loading...</p>; 
  }
  return (
    <PageWrapper>
      <Header />
      <DiaryContainer>
        <h1>Your Diary Entries</h1>
        {/* Wprowadź treści dla zalogowanego użytkownika */}
      </DiaryContainer>
      <Footer />
    </PageWrapper>
  );
};

export default Diary;
