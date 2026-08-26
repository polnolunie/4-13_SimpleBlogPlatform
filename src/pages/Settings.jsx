import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/buttons";
import "./Settings.css";

const API_URL = "https://realworld.habsida.net/api";

function ProfilePage() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user?.username || "",
      email: user?.email || "",
      bio: user?.bio || "",
      image: user?.image || "",
      password: "",
    },
  });

  const Submitted = async (data) => {
    try {
      const updatedUser = {
        username: data.username,
        email: data.email,
        bio: data.bio,
        image: data.image,
      };

      if (data.password) {
        updatedUser.password = data.password;
      }

      const response = await fetch(`${API_URL}/user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          user: updatedUser,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, messages]) => {
            setError(field, {
              type: "server",
              message: Array.isArray(messages)
                ? messages.join(", ")
                : messages,
            });
          });
        }

        return;
      }

      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", result.user.token);

      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <div className="profile-page">
      <form
        className="profile-form"
        onSubmit={handleSubmit(Submitted)}
      >
        <h1>Your Settings</h1>

        <Input
          type="text"
          placeholder="Username"
          register={register("username", {
            required: "Username обязателен",
          })}
        />

        {errors.username && (
          <p className="profile-error">
            {errors.username.message}
          </p>
        )}

        <Input
          type="email"
          placeholder="Email Address"
          register={register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Введите корректный email",
            },
          })}
        />

        {errors.email && (
          <p className="profile-error">
            {errors.email.message}
          </p>
        )}

        <textarea
          className="profile-bio"
          placeholder="Input your bio"
          {...register("bio")}
        />

        <Input
          type="text"
          placeholder="Avatar image (URL)"
          register={register("image", {
            pattern: {
              value: /^(https?:\/\/)[^\s]+$/i,
              message: "Введите корректный URL",
            },
          })}
        />

        {errors.image && (
          <p className="profile-error">
            {errors.image.message}
          </p>
        )}

        <Input
          type="password"
          placeholder="Password"
          register={register("password", {
            minLength: {
              value: 6,
              message: "Минимум 6 символов",
            },
            maxLength: {
              value: 40,
              message: "Максимум 40 символов",
            },
          })}
        />

        {errors.password && (
          <p className="profile-error">
            {errors.password.message}
          </p>
        )}

        <Button
          type="submit"
          className="profile-button"
          label="Update Settings"
        />

        <button
          type="button"
          className="logout-button"
          onClick={logout}
        >
          Click here to logout.
        </button>
      </form>
    </div>
  );
}

export default ProfilePage;