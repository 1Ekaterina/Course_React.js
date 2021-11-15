import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchUser } from "../../action/userAction";
import "./AuthPage.css";

function AuthPage({ error, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFlg, setErrorFlg] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (error) {
      setErrorFlg((prev) => !prev);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      history.push("/chats");
    }
  }, [user]);

  function hadlerSubmit(e) {
    e.preventDefault();
    setErrorFlg(false);
    dispatch(fetchUser({ email, password }));
  }

  return (
    <div className="auth">
      <form className="auth__form">
        <input
          className="auth__input"
          type="email"
          value={email}
          placeholder="Эл. почта"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="auth__input"
          type="password"
          value={password}
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className="auth__btn"
          type="submit"
          onClick={(e) => hadlerSubmit(e)}
        >
          Авторизация
        </button>
      </form>
      {errorFlg && (
        <p className="auth__error">Почта или пароль введены неверно</p>
      )}
    </div>
  );
}

export default AuthPage;