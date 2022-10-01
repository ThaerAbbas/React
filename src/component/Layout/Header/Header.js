import React, {useContext }  from "react";
import { Link } from "react-router-dom";
import { Context } from'./Context';


function Header() {
    const { user } = useContext(Context);

    return (
        <>
            <div class="container">
             
                    <p>Welcome: {user.name}</p>
                    <Link to="newperson"><p>AddPerson</p></Link>
                    <Link to="personlist"><p >Personlist</p></Link>
                    <Link to="logout"><p>Logout</p></Link>
            
            </div>
        </>
    );
}
  
  export default Header;