import { useContext } from "react"
import { UserContext } from "./users.context"

export const getUsers = () => {
    const { users } = useContext(UserContext);
    return users
}