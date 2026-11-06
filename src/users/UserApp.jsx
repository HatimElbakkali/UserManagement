import { useState, createContext } from "react"
import UsersLayout from "./UsersLayout"

export const UsersContext = createContext({
    users: [],
    lastId: 0,
    addUser: () => null,
    updateUser: () => null,
    deletUser: () => null

})

export default function UserApp() {
    const [users, setUsers] = useState([])
    const [lastId, setLastId] = useState(0)

    const addUser = (data) => {
        setUsers(prevState => [...prevState, data.payload])
        setLastId(prevState => prevState + 1)
    }

    const updateUser = (data) => {
        const { id, ...rest } = data.payload
        setUsers(prevState => prevState.map(user => {
            if (user.id === id) {
                return { id: user.id, ...rest }
            }
            return user
        }))

        window.history.back()
    }

    const deletUser = (data) => {
        setUsers(prevState => prevState.filter(user => user.id !== parseInt(data.payload.id)))
        window.history.back()

    }
    return (
        <>
            <UsersContext.Provider value={{
                users: users,
                lastId: lastId,
                actions: {
                    addUser,
                    updateUser,
                    deletUser
                }
            }}>
                <UsersLayout />
            </UsersContext.Provider>
        </>

    )
}
