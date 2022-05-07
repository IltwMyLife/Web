import { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbar__container">
      <div className="topbar__left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="topbar__logo">ВТеме</span>
        </Link>
      </div>
      <div className="topbar__center"></div>
      <div className="topbar__right">
        <div className="topbar__links">
          <span className="topbar__link">Домой</span>
          <span className="topbar__link">История</span>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + "peson/" + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbar__img"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
