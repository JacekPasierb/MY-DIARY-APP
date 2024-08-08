import styled from "styled-components";

export const Description = styled.p`
  text-align: center;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 34px;
    width: 22%;
  }
  @media (min-width: 1400px) {
    font-size: 34px;
    width: 50%;
  }
`;
export const InnerText = styled.span`
  font-size: 48px;
  color: #c29052;
`;

export const HomeContainer = styled.div`
  max-width: 1200px;
  flex: 1;
  padding: 1rem;
  text-align: center;
  align-content: center;
  @media (min-width: 480px) {
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: center;
  }
  @media (min-width: 768px) {
    justify-content: left;
    min-height: 380px;
  }
`;
// Flexbox container for the whole page
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
