import List from "../../components/list/list";
import "./profilePage.scss";
import Chat from "../../components/chat/chat";
import apiRequest from "../../components/lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContex";
function profilePage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null); // clear user data from local storage

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    currentUser && (
      <div className="profilePage">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <button>Update Profile</button>
            </div>
            <div className="info">
              <span>
                Avatar:
                <img src={currentUser.avatar || "/img/noavatar.jpg"} alt="" />
              </span>
              <span>
                Username: <b>{currentUser.username}</b>
              </span>
              <span>
                Username: <b>{currentUser.email}</b>
              </span>
              <button onClick={handleLogout}>Logout</button>
            </div>

            <div className="title">
              <h1>My List</h1>
              <button>Create New Post</button>
            </div>
            <List />
            <div className="title">
              <h1>Saved List</h1>
            </div>
            <List />

            <div className="title">
              <h1>Saved List</h1>
            </div>
          </div>
        </div>
        <div className="chatContainer">
          <div className="wrapper">
            <Chat />
          </div>
        </div>
      </div>
    )
  );
}

export default profilePage;
