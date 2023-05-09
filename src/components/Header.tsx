import Image from "next/image"
import labLogo from "../../public/lab.png"

export function Header() {
  return (
    <header className="bg-white py-3 px-8 items-center flex gap-2">
      <Image width={50} height={50} src={labLogo} alt="Logo do laboratório" />
      <h1 className="text-3xl font-medium">LabCaseus</h1>
    </header>
  )
}