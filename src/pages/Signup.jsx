import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/buttons"
import "./Signup.css";

const API_URL = "https://realworld.habsida.net/api";

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const Submitted = async (data) => {
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: data.username,
            email: data.email,
            password: data.password,
          },
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
      localStorage.setItem("token", result.user.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="signup-form" onSubmit={handleSubmit(Submitted)}>
      
      <h1>Sign Up</h1>

      <Input
        type="text"
        placeholder="Username"
        register={register("username", {
          required: "Username обязателен",
          minLength: {
            value: 3,
            message: "Username должен содержать минимум 3 символа",
          },
          maxLength: {
            value: 20,
            message: "Username должен содержать максимум 20 символов",
          },
        })}
      />

      {errors.username && (
        <p>{errors.username.message}</p>
      )}

      <Input
        type="email"
        placeholder="Email address"
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
        placeholder="Password"
        register={register("password", {
          required: "Password обязателен",
          minLength: {
            value: 6,
            message: "Password должен содержать минимум 6 символов",
          },
          maxLength: {
            value: 40,
            message: "Password должен содержать максимум 40 символов",
          },
        })}
      />

      {errors.password && (
        <p>{errors.password.message}</p>
      )}

      <Input
        type="password"
        placeholder="Repeat Password"
        register={register("repeatPassword", {
          required: "Повторите пароль",
          validate: (value) =>
            value === password || "Пароли не совпадают",
        })}
      />

      {errors.repeatPassword && (
        <p>{errors.repeatPassword.message}</p>
      )}

      <label>
        <input
          type="checkbox"
          {...register("agreement", {
            required: "Необходимо согласие на обработку персональных данных",
          })}
        />
        I agree to the processing of personal data
      </label>

      {errors.agreement && (
        <p>{errors.agreement.message}</p>
      )}
      <Button
  className="signup-button"
  label="Sign Up"
  type="submit"
/>
    </form>
  );
}

export default Signup;