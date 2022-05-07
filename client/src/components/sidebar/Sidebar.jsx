import { Link } from "react-router-dom";
import "./sidebar.css";
import { MdRssFeed } from "react-icons/md";
import { BsChatLeftTextFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <li className="sidebar__list-item">
              <MdRssFeed className="sidebar__icon" />
              <span className="sidebar__list-item__text">Новости</span>
            </li>
          </Link>
          <Link to="/messenger" style={{ textDecoration: "none", color: "black" }}>
            <li className="sidebar__list-item">
              <BsChatLeftTextFill className="sidebar__icon" />
              <span className="sidebar__list-item__text">Сообщения</span>
            </li>
          </Link>
        </ul>
        <ul className="sidebar__friend-list"></ul>
      </div>
    </div>
  );
};

export default Sidebar;
