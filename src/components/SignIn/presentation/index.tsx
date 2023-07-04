"use client";
import React from "react";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import Link from "next/link";
import * as Icon from "react-icons/fi";
import { type SignInPresentationProps } from "./types";

export const SignInPresentation: React.FC<SignInPresentationProps> = ({
  errorMessage,
  handleSignIn,
  isVisiblepassword,
  replaceVisibleInput,
  handleSetStateInput,
}) => {
  return (
    <div className="flex h-full">
      <main className="flex w-full h-screen justify-center items-center">
        <Form.Root title="Bem vindo de volta!">
          <Form.Label>
            <Form.Input
              onChange={(e) =>
                handleSetStateInput({ name: "email", value: e.target.value })
              }
              placeholder="E-mail"
              type="email"
            />
            <Icon.FiMail className="text-lg text-gray-900" />
          </Form.Label>

          <Form.Label>
            <Form.Input
              onChange={(e) =>
                handleSetStateInput({ name: "password", value: e.target.value })
              }
              placeholder="Senha"
              type={isVisiblepassword ? "text" : "password"}
            />
            <button type="button" onClick={replaceVisibleInput}>
              {isVisiblepassword ? (
                <Icon.FiEye className="text-lg text-gray-900" />
              ) : (
                <Icon.FiEyeOff className="text-lg text-gray-900" />
              )}
            </button>
          </Form.Label>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <section className="flex w-full mt-6 justify-between items-center">
            <Button type="button" onClick={handleSignIn}>
              <span className="text-white">Entrar</span>
              <Icon.FiLogIn className="text-lg" />
            </Button>

            <Link href="/signup" className="text-gray-600">
              Criar uma conta
            </Link>
          </section>
        </Form.Root>
      </main>
    </div>
  );
};
