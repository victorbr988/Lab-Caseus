"use client";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form"
import Link from "next/link";
import { useState } from "react"
import { FiEye, FiEyeOff, FiLogIn, FiMail } from "react-icons/fi"

export default function Home() {
  const [isVisiblepassword, setVisibePassword] = useState<boolean>(false)

  function replaceVisibleInput() {
    setVisibePassword((currentState) => !currentState)
  }

  return (
    <div className="flex h-full">
      <main className="flex w-full h-screen justify-center items-center">
        <Form.Root title="Bem vindo de volta!">
          <Form.Label>
            <Form.Input placeholder="E-mail" type="email" />
            <FiMail className="text-lg text-gray-900" />
          </Form.Label>

          <Form.Label>
            <Form.Input placeholder="Senha" type={isVisiblepassword ? "text": "password"} />
            <button type="button" onClick={replaceVisibleInput}>
              {isVisiblepassword ? ( 
                <FiEye className="text-lg text-gray-900" />
                ) : <FiEyeOff className="text-lg text-gray-900" />
              }
            </button>
          </Form.Label>

          <section className="flex w-full mt-6 justify-between items-center">
            <Button>
              <span className="text-white">Entrar</span>
              <FiLogIn className="text-lg" />
            </Button>

            <Link href="/signup" className="text-gray-600">
              Criar uma conta
            </Link>
          </section>
        </Form.Root>
      </main>
    </div>
  )
}