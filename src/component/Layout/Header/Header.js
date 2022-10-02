import React, {useContext }  from "react";
import { Link } from "react-router-dom";
import { Context } from'../.././Context';


function Header() {
    const { user } = useContext(Context);

    return (
        <>
            <div class="container">
             
                    <p>Welcome: {user.name}</p>
                    <Link to="/Home/form"><p>AddPerson</p></Link>
                    <Link to="/Home/Personlist"><p >Personlist</p></Link>
                    <Link to="/Home/Logout"><p>Logout</p></Link>
            
            </div>
        </>
    );
}
  
  export default Header;