import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import {
  ContainerField,
  ContainerTitle,
  LineInner,
  LineLong,
  LineShort,
  SectionForm,
  TitleForm,
} from "./LoginForm.styled";

const LoginForm = () => {
  return (
    <SectionForm>
      <ContainerTitle>
        <TitleForm>Login Form...</TitleForm>
        <LineInner />
      </ContainerTitle>
      <Formik
        initialValues={{ login: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.login) {
            errors.login = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
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
              <LineShort />
              <Field type="text" name="login" placeholder="Login" />
              <ErrorMessage name="login" component="div" />
              <LineLong />
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </ContainerField>
            <button type="submit" disabled={isSubmitting}>
              Open Diary
            </button>
          </Form>
        )}
      </Formik>
    </SectionForm>
  );
};

export default LoginForm;
