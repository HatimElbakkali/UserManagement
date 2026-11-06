import { UsersContext } from "./UserApp"
import { useContext } from "react"
import { Link } from "react-router-dom"

export default function UserTable() {
    const context = useContext(UsersContext)

    return (
        <>
            <h1>Users</h1>
            <table className="table table-striped table-inverse table-responsive ">
                <thead className="thead-inverse">
                    <tr>
                        <th>#ID</th>
                        <th>Full Name</th>
                        <th>Country</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(context.users?.length > 0) ? context.users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.FullName}</td>
                            <td>{user.country}</td>
                            <td>
                                <Link to={`/users/${user.id}/edit`} className={`btn btn-primary mx-1`}>Update</Link>
                                <Link to={`/users/${user.id}/delete`} className={`btn btn-danger`}>delete</Link>
                            </td>
                        </tr>) :
                        <tr><td colSpan={4} align={"center"}>No items</td></tr>}
                </tbody>
            </table>
        </>
    )
}