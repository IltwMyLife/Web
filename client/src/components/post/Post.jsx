import "./post.css";
import { FiMoreVertical } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top-left">
            <Link to={`/profile/${user.username}`}>
              <img
                className="post__profile-img"
                src={
                  user.profilePicture
                    ? PF + "person/" + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="post__username">{user.username}</span>
            <span className="post__date">{format(post.createdAt)}</span>
          </div>
          <div className="post__top-right">
            <FiMoreVertical />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{post?.desc}</span>
          <img className="post__img" src={PF + post.img} alt="" />
        </div>
        <div className="post__bottom">
          <div className="post__bottom-left">
            <img
              className="like__icon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="like__icon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />
            <span className="post__like-counter">{like} лайка</span>
          </div>
          <div className="post__bottom-right">
            <span className="post__comment-text">
              {post.comment} комментариев
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
