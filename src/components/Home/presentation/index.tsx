"use client"
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import Alert from "@/components/Alert";
import { formatDate } from "@/utils/formatDate";
import { columns, columnsTable, columnsTableData, fieldsForm } from "@/components/Home/container/constants";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import * as Icon from "react-icons/fi";
import { Table } from "@/components/Table";
import labLogo from "../../../../public/lab.png";
import Image from "next/image";
import { IHomePresentationProps } from "./types";

export const HomePresentation: React.FC<IHomePresentationProps> = ({handleSubmit,
     handleClick,
     handleLogout,
     isAuthenticated,
    isVisibleModel, userData }) => {


    return (
        <main className="min-h-screen">
          {!isAuthenticated && <Alert />}
    
          {isAuthenticated && (
            <section className="flex h-full">
              <Sidebar.Root>
                <div className="flex justify-center">
                  <Image
                    width={130}
                    height={130}
                    src={labLogo}
                    alt="Logo do laboratório"
                    className="rounded text-center"
                  />
                </div>
    
                <Sidebar.Box>
                  {columns.map((item) => (
                    <Sidebar.Navigator key={item.id} route={item.redirect}>
                      <Icon.FiHome className="text-2xl" />
                      <h2 className="text-lg">{item.label}</h2>
                    </Sidebar.Navigator>
                  ))}
                </Sidebar.Box>
    
                <button onClick={() => handleLogout()} className="flex gap-2 absolute bottom-8 px-4 py-3 w-60 rounded cursor-pointer hover:bg-gray-950 hover:text-gray-100 transition-colors" >
                  <Icon.FiLogOut className="text-2xl" />
                  <h2  className="text-lg">Sair</h2>
                </button>
              </Sidebar.Root>
    
              <section className="w-full h-screen md:px-40 pb-24 p-10 flex flex-col gap-4">
                <header>
                  <Button onClick={handleClick} type="button">
                    <Icon.FiPlusCircle className="text-lg" />
                    Cadastrar
                  </Button>
                </header>
                {isVisibleModel && (
                  <div className="flex w-full h-screen justify-center items-center">
                    <form
                      className="bg-white p-8 sm:w-[500px] w-full shadow-lg flex flex-col gap-8 rounded-lg"
                      onSubmit={handleSubmit}
                    >
                      {fieldsForm.map((item) => (
                        <Form.Label key={item.name}>
                          <Form.Input
                            inputMode={item.name !== "cpf" ? "numeric" : "text"}
                            {...item}
                          />
                        </Form.Label>
                      ))}
                      <Button type="submit">Enviar</Button>
                    </form>
                  </div>
                )}
    
                <section className="h-full bg-white flex flex-col rounded-xl overflow-auto">
                  <Table.Root>
                    <thead className="bg-gray-950">
                      <Table.Tr>
                        {columnsTable.map((item) => (
                          <Table.Th key={item} description={item} />
                        ))}
                      </Table.Tr>
                    </thead>
                    <tbody>
                      {userData.length > 0 ? (
                        userData.map((item) => (
                          <Table.Tr key={item.id}>
                            <Table.Td>{item.nome}</Table.Td>
                            <Table.Td>{item.telefone}</Table.Td>
                            <Table.Td>{item.cpf}</Table.Td>
                            <Table.Td>{formatDate(item.dataCriacao)}</Table.Td>
                          </Table.Tr>
                        ))
                      ) : (
                        <Table.Tr>
                          {columnsTableData.map((item) => (
                            <Table.Td key={item}>{item}</Table.Td>
                          ))}
                        </Table.Tr>
                      )}
                    </tbody>
                  </Table.Root>
                </section>
              </section>
            </section>
          )}
    
          {isAuthenticated && <Footer />}
        </main>
      );
}