"use client";
import { SignInPresentation } from "../presentation";
import { useState, useEffect } from "react";
import { EMAIL_TECHNO_CHEM, PASSWORD_TECHNO_CHEM } from "./constants";
import { generateToken } from "@/utils/generateToken";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { type ISetStateProps } from "./types";

export const SignInContainer: React.FC = () => {
  const router = useRouter();

  const [isVisiblepassword, setVisibePassword] = useState<boolean>(false);
  const [emailInput, setEmail] = useState<string>("");
  const [passwordInput, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [token, setToken] = useLocalStorage("@technochem:token", "");

  function replaceVisibleInput(): void {
    setVisibePassword((currentState) => !currentState);
  }

  const onSetStateInput = {
    email: (value: string) => setEmail(value),
    password: (value: string) => setPassword(value),
  };

  function handleSetStateInput({ name, value }: ISetStateProps): void {
    onSetStateInput[name](value);
  }

  function handleSignIn(): void {
    const isEmailValid = emailInput === EMAIL_TECHNO_CHEM;
    const isPasswordValid = passwordInput === PASSWORD_TECHNO_CHEM;

    if (isEmailValid && isPasswordValid) {
      const newToken = generateToken();
      setToken(newToken);
      router.push("/home");
    } else {
      setErrorMessage("O usuário não é um administrador do sistema.");
    }
  }

  useEffect(() => {
    if (token) {
      router.push("/home");
    }
  }, []);

  const signInPresentationProps = {
    errorMessage,
    handleSignIn,
    handleSetStateInput,
    isVisiblepassword,
    replaceVisibleInput,
  };

  return <SignInPresentation {...signInPresentationProps} />;
};
