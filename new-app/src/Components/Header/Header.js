import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
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
    </header>
  );
}

export default Header;
