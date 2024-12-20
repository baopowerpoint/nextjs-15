"use client";
import React from "react";

import AuthForm from "@/components/form/AuthForm";
import { SignInSchema } from "@/lib/validation";

const SignInPage = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignInPage;
