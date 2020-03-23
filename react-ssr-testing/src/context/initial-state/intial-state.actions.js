import { useContext } from "react"
import { InitialStateContext } from "./intial-state.context"


export const getUsers = () => {
    const { users } = useContext(InitialStateContext);
    return users;
}