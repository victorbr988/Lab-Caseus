import Image from "next/image";
import { InputHTMLAttributes, ReactNode } from "react"
import labLogo from "../../public/lab.png"

interface RootFormProps {
  children: ReactNode;
  title: string
}
function RootForm({ children, title }: RootFormProps) {
  return (
    <form className="bg-white p-8 sm:w-[500px] w-full shadow-lg flex flex-col gap-8 rounded-lg">
      <section className="flex flex-col items-center gap-3">
        <Image width={130} height={130} src={labLogo} alt="Logo do laboratório" className="rounded" />
        <h2 className=" text-2xl text-center">{title}</h2>
      </section>

      <main className="flex flex-col gap-3">
        { children }
      </main>
    </form>
  )
}

interface InputMailProps extends InputHTMLAttributes<HTMLInputElement> {}
function InputForm(props: InputMailProps) {
  return (
    <input {...props} className="flex-1 bg-transparent outline-none" />
  )
}

interface ModalLabelProps {
  children: ReactNode;
}
function FormLabel({children}: ModalLabelProps) {
  return (
    <label className="flex gap-2 focus-within:border-[#0066FF] text-gray-900 border-2 border-gray-300 rounded items-center w-full p-2">
      {children}
    </label>
  )
}

export const Form = {
  Root: RootForm,
  Input: InputForm,
  Label: FormLabel
}
