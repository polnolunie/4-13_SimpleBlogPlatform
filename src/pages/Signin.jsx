import Input from "../components/input";
import {useForm} from "react-hook-form";

function Signin() {
  const 
  {register,
  handleSubmit,
  formState: {errors},
  reset} = useForm()
  const Submitted = (data) => {
    console.log('Working!');
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(Submitted)}>
      <h1>Signin</h1>
      <p>login page is here</p>
      <Input type="email" placeholder="email" register={register("email")} />
      <Input type="password" placeholder="password" register={register("password")} />
      <button type="submit" >Login</button>
    </form>
  );
}

export default Signin;
