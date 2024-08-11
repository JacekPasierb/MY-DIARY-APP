"use client";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
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
import axios from "axios";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";

const LoginForm = () => {
  const router = useRouter(); // Inicjalizuj useRouter
  const dispatch: AppDispatch = useDispatch();
  const handleLogin = async (
    values: FormikValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const result = await dispatch(
        logIn({ login: values.login, password: values.password })
      );

      resetForm();

      router.push("/diary"); // Przekierowanie na stronę /diary
    } catch (error: any) {
      console.error(error.message);
      alert("Error");
    }
  };
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
        onSubmit={handleLogin}
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
