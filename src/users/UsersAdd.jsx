import { useContext, useRef } from "react";
import { UsersContext } from "./UserApp"

export default function UserAdd() {
    const context = useContext(UsersContext)
    const FullName = useRef(null);
    const country = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        context.actions.addUser({
            payload: {
                id: context.lastId + 1,
                FullName: FullName.current.value,
                country: country.current.value,
            }
        });

        FullName.current.value = '';
        country.current.value = '';
    };

    return (
        <>
            <h1>Add user</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="currentID" className="col-sm-2 col-form-label">
                        Current id
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            readOnly
                            name=""
                            id="currentId"
                            className="form-control-plaintext"
                            value={context.lastId + 1}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="FullName" className="col-sm-2 col-form-label">
                        Full Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="FullName"
                            id="FullName"
                            className="form-control-plaintext"
                            ref={FullName}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="Country" className="col-sm-2 col-form-label">
                        Country
                    </label>
                    <div className="col-sm-10">
                        <select name="Country" id="Country" className="form-select" ref={country}>
                            <option>Select your country</option>
                            <option value="Morocoo">Morocoo</option>
                            <option value="Tunsian">Tunsian</option>
                            <option value="Algerien">Algerien</option>
                        </select>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                        ADD
                    </button>
                </div>
            </form>
        </>
    );
}
