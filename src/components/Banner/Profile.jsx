import "./Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile_banner">
      <img
        className="profile_avatar"
        src={user?.image}
        alt={user?.username}
      />

      <h1>{user?.username}</h1>
    </div>
  );
}

export default Profile;