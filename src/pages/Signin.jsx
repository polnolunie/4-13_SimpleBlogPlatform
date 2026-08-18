import Input from "../components/input";
import useForm from "react-hook-form";

function Signin() {
  const 
  {register,
  handleSubmmit,
  formState={error, submitted},
  reset} = useForm()
  const Submitted = (data) => {
    console.log('Working!');
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Signin</h1>
      <p>login page is here</p>
      <Input type="email" placeholder="email" />
      <Input type="password" placeholder="password" />
      <button type="button" >Login</button>
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
    </form>
  );
}

export default Signin;
