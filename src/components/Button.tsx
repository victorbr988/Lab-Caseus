import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-gray-950 px-6 py-2 hover:brightness-75 transition-all flex gap-2 justify-center items-center rounded text-gray-100">
      { children }
    </button>
  )
}