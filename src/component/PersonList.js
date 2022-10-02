import Header from "./Layout/Header/Header"
import Footer from "./Layout/Footer/Footer"
import { Link } from "react-router-dom";

export const UsersList = ({persons}) => {
  
  
    const listItems =  <ul> </ul>;
     
          return (
            <>
     
            <Header />
            
            
         
              <div>
           <div className="contact-list-container">
            
              {listItems}
          </div>
        <table class="table" style={{border: "1px"}}>
          <thead>
            <tr >
                <th>Firstname</th>
                <th>Lastname</th>
                <th >Age</th>
                <th>Nationality</th>
                <th>Email</th>
            </tr>
          {persons.map((person,id) => (
              
            <tr key={id}>        
              <th style={{fontWeight: "normal", fontSize: 25}}> {person.name}</th>
              <th style={{fontWeight: "normal", fontSize: 25}}> {person.lastname}</th>
              <th style={{fontWeight: "normal", fontSize: 25}}> {person.age}</th>
              <th style={{fontWeight: "normal", fontSize: 25}}> {person.nationality}</th>
              <th style={{fontWeight: "normal", fontSize: 25}}> {person.email}</th>
              <th> <Link to="/Home/PersonDetails"><p>Person Details</p></Link></th>     
            </tr>
            
             ))}
             
           </thead>
          </table>
                
              </div>
              <Footer />
         
            
         </>
            );
        }