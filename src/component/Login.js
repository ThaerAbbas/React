import React, { useContext, useState } from 'react';
import { Context } from'./Layout/Header/Context';
import { Link } from "react-router-dom";


const Login = () => {
  const { login } = useContext(Context);
  const [name, setName] = useState();

  return (
    <>
   
 <div>
  <br/>
      <input
        type="text"
        
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
       <Link to="Home"><button onClick={() => login(name)}>Log in</button></Link>
    </div>
    </>
  );
}

export default Login;