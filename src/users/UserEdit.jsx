import { useEffect, useState, useRef, useContext } from "react";
import { UsersContext } from "./UserApp"
import { useParams } from "react-router-dom";

export default function UserEdit() {
  const params = useParams();
  const context = useContext(UsersContext)
  const FullName = useRef(null);
  const country = useRef(null);
  const [currentUser, setCurrentUser] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    context.actions.updateUser({
      payload: {
        FullName: FullName.current.value,
        country: country.current.value,
        id:  parseInt(params.id)
      }
    })
  };

  useEffect(() => {
    const { id } = params
    const user = context.users.filter(user => user.id === parseInt(id));
    if (user.length > 0) {
      setCurrentUser(...user);
    } else {
      console.error("user not found");
    }    
  }, [params, context.users]);


  return (
    <>
      <h1>Edit user</h1>
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
              defaultValue={currentUser?.id}
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
              defaultValue={currentUser?.FullName}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="Country" className="col-sm-2 col-form-label">
            Country
          </label>
          <div className="col-sm-10">
            <select name="Country  " id="Country" className="form-select" ref={country} defaultValue={currentUser?.country} key={currentUser?.country}>
              <option>Select your country</option>
              <option value="Morocoo">Morocoo</option>
              <option value="Tunsian">Tunsian</option>
              <option value="Algerien">Algerien</option>
            </select>
          </div>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            UPDATE
          </button>
        </div>
      </form>
    </>
  );
}
