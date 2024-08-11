// components/RegisterForm/RegisterForm.js
import styled from "styled-components";
import {
  ContainerField,
  ContainerTitle,
  ErrorText,
  LineLong,
  LineShort,
  SectionRegister,
  TitleForm,
} from "./RegisterForm.styled";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";

import { register } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";

const FormContainer = styled.div`
  position: absolute;
  top: 42%;
  left: 75%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 400px;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10; /* Ensure the form is on top */
`;

const RegisterForm = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = async (
    values: FormikValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const result = await dispatch(
        register({
          login: values.login,
          password: values.password,
          email: values.email,
        })
      );

      alert("Register Success !");
      resetForm();
    } catch (error: any) {
      alert("Erroreeee");
    }
  };
  return (
    <SectionRegister>
      <ContainerTitle>
        <TitleForm>Create Diary</TitleForm>
        <LineLong />
      </ContainerTitle>
      <Formik
        initialValues={{ login: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.login) {
            errors.login = "Required";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form>
            <ContainerField>
              <label htmlFor="login">Login</label>

              <Field type="text" name="login" placeholder="Login" />
              <ErrorText>
                <ErrorMessage name="login" component="div" />
              </ErrorText>
              <LineShort />
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorText>
                <ErrorMessage name="email" component="div" />
              </ErrorText>
              <LineShort />
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorText>
                <ErrorMessage name="password" component="div" />
              </ErrorText>
              <LineShort />
            </ContainerField>
            <button type="submit" disabled={isSubmitting}>
              Create
            </button>
          </Form>
        )}
      </Formik>
    </SectionRegister>
  );
};

export default RegisterForm;
