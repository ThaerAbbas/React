import React, { useState } from "react";
import {FormUsers} from './component/form'
import {UsersList} from './component/users'

import './App.css'

function App() {

  const [persons, updatepersons] = useState([]);

  const addPerson = (person) => {
    updatepersons([...persons, person]);
  };



 
  return ( 
    <>
    <div className="App">
     
      <FormUsers addPerson={addPerson} />
      <h1><UsersList persons={persons} /></h1> 
      
  
    </div>
    </>
  );
  }
export default App
