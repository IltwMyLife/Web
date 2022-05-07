import "./online.css";

const Online = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbar__friend">
      <div className="rightbar__profile-img__container">
        <img
          src={PF + user.profilePicture}
          alt=""
          className="rightbar__profile-img"
        />
        <span className="rightbar__online"></span>
      </div>
      <span className="rightbar__username">{user.username}</span>
    </li>
  );
};

export default Online;
