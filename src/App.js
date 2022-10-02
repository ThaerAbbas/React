import React, { useState } from "react";
import {FormUsers} from './component/form'
import {UsersList} from './component/PersonList'



import { Routes, Route} from "react-router-dom";
import Logout from './component/Logout';
import Login from './component/Login';
import { Home } from './component/Home';
import PersonDetails from './component/PersonDetails'



import './App.css'


function App() {

    

  const [persons, updatepersons] = useState([]);

  const addPerson = (person) => {
    updatepersons([...persons, person]);
  };



 
  return ( 
    <>
    <div className="App">
 
      <Routes>
      <Route index path="/" element={  <Login/> } />
        <Route  path="home/" element={ <Home/> } />

        <Route  path="/Home/PersonDetails/" element={ <PersonDetails/> } />
        <Route exact  path="home/form/" element={ <FormUsers  addPerson={addPerson}/>} />
        <Route exact path="home/Personlist/" element={ <UsersList persons={persons}  />} />
        <Route exact  path="home/Logout" element={ < Logout  />} />

        
      </Routes>
  
    </div>
    </>
  );
  }
export default App
