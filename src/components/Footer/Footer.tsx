import React from "react";
import { Container, ContainerFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <ContainerFooter>
      <Container>
        <p>
          &copy; 2024 My Diary. All rights reserved. Created by{" "}
          <a
            href="https://www.linkedin.com/in/jacek-pasierb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jacek Pasierb
          </a>
        </p>
      </Container>
    </ContainerFooter>
  );
};

export default Footer;
