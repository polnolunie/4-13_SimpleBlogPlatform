import { useEffect, useState } from "react";
import Input from "../components/input";

function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <p>create new profile here</p>
      <Input type="email" placeholder="email" />
      <Input type="password" placeholder="password" />
    </div>
  );
}

export default Signup;
