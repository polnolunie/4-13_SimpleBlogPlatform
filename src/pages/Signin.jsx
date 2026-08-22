import Input from "../components/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const API_URL = "https://realworld.habsida.net/api";

function Signin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const Submitted = async (data) => {
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: data.email,
            password: data.password,
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError("password", {
          type: "server",
          message: "Неверный логин или пароль",
        });

        return;
      }

      localStorage.setItem("token", result.user.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/");
    } catch (error) {
      setError("password", {
        type: "server",
        message: "Ошибка соединения с сервером",
      });
    }
  };

  return (
    <form
      className="signin-form"
      onSubmit={handleSubmit(Submitted)}
    >
      <h1>Sign In</h1>

      <Input
        type="email"
        placeholder="email"
        register={register("email", {
          required: "Email обязателен",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Введите корректный email",
          },
        })}
      />

      {errors.email && (
        <p>{errors.email.message}</p>
      )}

      <Input
        type="password"
        placeholder="password"
        register={register("password", {
          required: "Пароль обязателен",
        })}
      />

      {errors.password && (
        <p>{errors.password.message}</p>
      )}

      <button
        className="signin-button"
        type="submit"
      >
        Login
      </button>
    </form>
  );
      }
export default Signin;