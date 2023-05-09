import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { FiActivity, FiClipboard, FiFile, FiHome, FiLogOut, FiPlusCircle } from "react-icons/fi"
import { Table } from "@/components/Table";
import labLogo from "../../../../public/lab.png"
import Image from "next/image";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function HomeApp() {
  return (
    <main className="min-h-screen">
      <section className="flex h-full">
        <Sidebar.Root>
          <div className="flex justify-center">
            <Image width={130} height={130} src={labLogo} alt="Logo do laboratório" className="rounded text-center" />
          </div>
          
          <Sidebar.Box>
            <Sidebar.Navigator route="/create/report">
              <FiHome className="text-2xl" />
              <h2 className="text-lg">Início</h2>
            </Sidebar.Navigator>

            <Sidebar.Navigator route="/search">
              <FiClipboard className="text-2xl" />
              <h2 className="text-lg">Relatórios</h2>
            </Sidebar.Navigator>

            <Sidebar.Navigator route="/home">
              <FiFile className="text-2xl" />
              <h2 className="text-lg">Boletos</h2>
            </Sidebar.Navigator>

            <Sidebar.Navigator route="/">
              <FiActivity className="text-2xl" />
              <h2 className="text-lg">Métricas</h2>
            </Sidebar.Navigator>
          </Sidebar.Box>

          <Link href="/" className="flex gap-2 absolute bottom-8 px-4 py-3 w-60 rounded cursor-pointer hover:bg-gray-950 hover:text-gray-100 transition-colors ">
            <FiLogOut className="text-2xl" />
            <h2 className="text-lg">Sair</h2>
          </Link>
        </Sidebar.Root>

        <section className="w-full h-screen md:px-40 pb-24 p-10 flex flex-col gap-4">
          <header>
            <Button>
              <FiPlusCircle className="text-lg" />
              Cadastrar
            </Button> 
          </header>
         
          
          <section className="h-full bg-white flex flex-col rounded-xl overflow-auto">
          <Table.Root>
            <thead className="bg-gray-950">
              <Table.Tr>
                <Table.Th description="Coluna 1" />
                <Table.Th description="Coluna 2" />
                <Table.Th description="Coluna 3" />
                <Table.Th description="Coluna 4" />
              </Table.Tr>
            </thead>

            <tbody className="bg-gray-100">
              <Table.Tr>
                <Table.Td>
                  Teste
                </Table.Td>
                <Table.Td>
                  Teste
                </Table.Td>
                <Table.Td>
                  Teste
                </Table.Td>
                <Table.Td>
                  Teste
                </Table.Td>
              </Table.Tr>
            </tbody>
          </Table.Root>
          </section>
        </section>
      </section>
      <Footer />
    </main>
  )
}
