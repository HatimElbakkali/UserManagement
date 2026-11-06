import UserEdit from "./UserEdit";
import UserAdd from "./UsersAdd";
import UsersDelet from "./UsersDelet";
import UserTable from "./UserTable";
import {
    BrowserRouter,
    Link,
    Routes,
    Route
} from "react-router-dom";

export default function UsersLayout() {
    return (
        <>
            <BrowserRouter basename="/UserManagement">
                <nav>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to={'/'} className='nav-link'>
                                users List
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/users/create'} className='nav-link'>
                                Add User
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<UserTable />} />
                    <Route path={'/users/create'} element={<UserAdd />} />
                    <Route path={'/users/:id/edit'} element={<UserEdit />} />
                    <Route path={'/users/:id/delete'} element={<UsersDelet />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
