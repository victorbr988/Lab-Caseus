import { type UserData } from "../container/types";
import { type FormEvent } from 'react'

export interface IHomePresentationProps {
    isAuthenticated: boolean,
    userData: UserData[],
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void,
    handleClick: () => void,
    isVisibleModel: boolean,
    handleLogout: () => void,
}