import { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setName } from "../../action/profileActions";
import Header from "../Header/Header";
import "./Profile.css"

function Profile() {
  const name = useSelector((state) => state.profile.name, shallowEqual);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    dispatch(setName(value));
    setValue("");
  }

  return (
    <>
      <Header />
      <div>
        <h4>Profile</h4>
      </div>
      <div className="nameProfile">{name}</div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={submitHandler}>Изменить имя</button>
      </div>
    </>
  );
}

export default Profile;
