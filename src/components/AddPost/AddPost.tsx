import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { FaPenFancy } from "react-icons/fa";

const Container = styled.div`
  border: 4px solid #857d6d; /* Grubsza linia na zewnątrz */
  border-bottom-color: #41403c; /* Dodatkowy kolor na dole */
  box-shadow: 0px 0px 30px rgba(5, 0, 0, 0.3); /* Cień */
  background-color: #60615c;
  border-radius: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-block: 10px;

  padding-inline: 20px;

  button {
    padding: 10px 20px;
    font-family: "Allura", cursive;
    font-size: 8px;
    background-color: #cfcbc0;
    color: #767267;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    width: auto;
    align-self: center;

    @media (min-width: 480px) {
      font-size: 16px;
    }
    &:hover {
      background-color: #b3aea1; /* Zmiana koloru tła na hover */
      color: #5e5a54; /* Zmiana koloru tekstu na hover */
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Zwiększenie cienia na hover */
    }
  }
  div {
    color: red;
  }
`;

const Title = styled.h2`
  font-family: "Allura", cursive;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledField = styled(Field)`
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const TextArea = styled(StyledField)`
  height: 150px;
  resize: none;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
`;
const DateText = styled.p`
  text-align: center;
  font-size: 16px;
  color: #bbbab4;
  margin-bottom: 20px;
`;

const DiaryEntryForm = () => {
  const initialValues = {
    content: "",
  };

  const validationSchema = Yup.object({
    content: Yup.string()
      .max(1000, "Content must be 1000 characters or less")
      .required("Content is required"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form data", values);
    setSubmitting(false);
    resetForm();
  };
  const currentDate = new Date().toLocaleDateString();
  return (
    <Container>
      <Title>
        <FaPenFancy />
        Add Diary Entry
      </Title>
      <DateText>{currentDate}</DateText>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <TextArea
              as="textarea"
              name="content"
              placeholder="What happened today?"
            />
            <ErrorMessage name="content" component={ErrorText} />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding Entry..." : "Add Entry"}
            </button>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default DiaryEntryForm;
