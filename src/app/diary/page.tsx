// pages/diary.js
"use client";

import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


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
