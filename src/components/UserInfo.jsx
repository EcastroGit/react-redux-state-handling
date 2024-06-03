import { useSelector, useDispatch } from "react-redux";
import { changeEmail, changeAddress } from "../redux/userSlice";

function UserInfo() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Client Information</h2>
      <ul>
        <li>
          <span className="tag">Name:</span> {user.name}
        </li>
        <li>
          <span className="tag">Username:</span> {user.username}
        </li>
        <li>
          <span className="tag">Address:</span> {user.address}
        </li>
        <li>
          <span className="tag">Email:</span> {user.email}
        </li>
      </ul>
      <div>
        <div className="input">
          <label>Update Address:</label>
          <input
            type="input"
            value={user.address}
            onChange={(e) => dispatch(changeAddress(e.target.value))}
          />
        </div>
        <div className="input">
          <label>Update Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(event) => dispatch(changeEmail(event.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
