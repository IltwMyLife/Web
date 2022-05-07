import "./rightbar.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(false);
  const [conversationsStarted, setConversationsStarted] = useState(false);

  useEffect(() => {
    if (user?._id) {
      setFollowed(currentUser.followings.includes(user?._id));

      const setConversation = async () => {
        try {
          const res = await axios.get(
            `/conversations/find/${currentUser._id}/${user._id}`
          );
          res.data
            ? setConversationsStarted(true)
            : setConversationsStarted(false);
        } catch (err) {
          console.log(err);
        }
      };

      setConversation();
    }

    if (user?._id) {
      const getFriendsUser = async () => {
        try {
          const friendList = await axios.get("/users/friends/" + user._id);
          setFriends(friendList.data);
        } catch (err) {}
      };
      getFriendsUser();
    } else if (currentUser?._id) {
      const getFriendsCurrentUser = async () => {
        try {
          const friendList = await axios.get(
            "/users/friends/" + currentUser._id
          );
          console.log(friendList);
          setFriends(friendList.data);
        } catch (err) {}
      };
      getFriendsCurrentUser();
    }
  }, [user, currentUser]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put("/users/" + user._id + "/unfollow", {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put("/users/" + user._id + "/follow", {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  const startConversations = async () => {
    try {
      await axios.post("/conversations", {
        senderId: currentUser._id,
        receiverId: user._id,
      });
      setConversationsStarted(true);
    } catch (err) {
      console.log(err);
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        <h4 className="rightbar__title">Друзья</h4>
        <ul className="rightbar__friend-list">
          {friends.map((friend) => (
            <Link
              key={friend._id}
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="rightbar__following">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbar__following-img"
                />
                <span className="rightbar__following-name">
                  {friend.username}
                </span>
              </div>
            </Link>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <div style={{ display: "flex" }}>
            <button className="rightbar__follow-btn" onClick={handleClick}>
              {followed ? "Отписаться" : "Подписаться"}
              {followed ? (
                <FiMinus style={{ color: "white" }} />
              ) : (
                <BsPlusLg style={{ color: "white" }} />
              )}
            </button>
            {!conversationsStarted ? (
              <Link style={{ textDecoration: "none" }} to="/messenger">
                {" "}
                <button
                  style={{ marginLeft: "10px" }}
                  className="rightbar__follow-btn"
                  onClick={startConversations}
                >
                  Начать общение
                </button>{" "}
              </Link>
            ) : null}
          </div>
        )}

        <h4 className="rightbar__title">Друзья пользователя</h4>
        <div className="rightbar__followings">
          {friends.map((friend) => (
            <Link
              key={friend._id}
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbar__following">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbar__following-img"
                />
                <span className="rightbar__following-name">
                  {friend.username}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
