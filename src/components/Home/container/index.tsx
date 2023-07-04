"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { type UserData } from "@/components/Home/container/types";
import { HomePresentation } from "../presentation";


export const HomeContainer: React.FC = () => {
    const router = useRouter();

    const [token, setToken] = useLocalStorage("@technochem:token", "");
  
    const [isVisibleModel, setVisibleModel] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserData[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  
    function handleClick(): void {
      setVisibleModel(!isVisibleModel);
    }
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
      event.preventDefault();
  
      const userDataTemplate = {
        id: userData.length + 1,
        nome: event.currentTarget.nome.value,
        telefone: Number(event.currentTarget.telefone.value),
        cpf: event.currentTarget.cpf.value,
        dataCriacao: Date.now(),
      };
  
      setUserData((prevStateUser) => [...prevStateUser, userDataTemplate]);
  
      setVisibleModel(false);
  
      (event.currentTarget.nome.value = ""),
        (event.currentTarget.telefone.value = ""),
        (event.currentTarget.cpf.value = "");
    }
  
    function handleLogout(): void {
      setIsAuthenticated(false);
      setToken("");
      router.push("/");
    }
  
    useEffect(() => {
      if (!token) {
        setIsAuthenticated(false);
      }
    }, []);

    const homePresentationProps = {
        isAuthenticated,
        userData,
        handleSubmit,
        handleClick,
        isVisibleModel,
        handleLogout,
    }

  return <HomePresentation {...homePresentationProps}/>
}