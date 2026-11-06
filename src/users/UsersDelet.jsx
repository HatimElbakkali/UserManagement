import {useContext} from "react";
import { UsersContext } from "./UserApp"
import { useParams } from "react-router-dom";

export default function UsersDelet() {
    const params = useParams();
    const context = useContext(UsersContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        context.actions.deletUser({
            payload: {
                id: parseInt(params.id)
            }
        })
    };
    return (
        <>
            <h1>wach 8ad msa7</h1>
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
                DELETE
            </button>
        </>
    )
}
