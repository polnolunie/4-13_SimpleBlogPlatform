import Button from "../components/buttons";

function ProfilePage() {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <div>
      <h1>Profile Page</h1>

      <Button type="button" onClick={logout}
        label="Log out"
      />
    </div>
  );
}

export default ProfilePage;