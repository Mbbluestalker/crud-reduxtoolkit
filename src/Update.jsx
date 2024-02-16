import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

const Update = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id == id);
  const { name, email } = existingUser;
  const [uName, setName] = useState(name);
  const [uEmail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: id, name: uName, email: uEmail }));
    navigate("/")
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update user</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              value={uName}
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name">Email:</label>
            <input
              value={uEmail}
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-info mt-3">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
