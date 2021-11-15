import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../action/userAction";

function Header() {
  const [authFlg, setAuthFlg] = useState(false);
  const { user, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setAuthFlg(false);
    }
  }, [user]);

  function handlerExit() {
    dispatch(userLogout());
  }

  return (
    <header>
      <ul>
        <li>
          <Link to="/profile" className="link">Профиль</Link>
        </li>
        <li>
          <Link to="/chats" className="link">Чаты</Link>
        </li>
        <li>
          <Link to="/quotes" className="link">Цитаты из Аниме</Link>
        </li>
      </ul>
      <div className="header__authBtns">
        {/* <button>Регистрация</button> */}
        {!user && <button onClick={() => setAuthFlg(!authFlg)}>Вход</button>}
        {user && <button onClick={() => handlerExit()}>Выход</button>}
      </div>
      {authFlg && <AuthPage error={error} user={user} />}
    </header>
  );
}

export default Header;
