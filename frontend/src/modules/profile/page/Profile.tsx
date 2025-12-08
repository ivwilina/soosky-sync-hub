import "../style/profile.css";
import { useAuth } from "../../../contexts/auth/useAuth";

const Profile = () => {
  const { user, userRole, logout } = useAuth();

  return (
    <>
      <div className="profile-wrapper">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-card-details">
              <div className="profile-role-pill">{userRole}</div>
              <h1>{user.userName}</h1>
              <p>{user.userEmail}</p>
            </div>
            <div className="profile-action-logout">
              <button onClick={logout}>sign out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
