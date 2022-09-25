import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";


export const FormUsers = ({addPerson})  =>{

  const [personInfo, setpersonInfo] = useState({
    name: "",
    lastname: "",
    age: "",
    nationality: "",
    email: "",
  });

  const handleChange = (event) => {
    setpersonInfo({ ...personInfo, [event.target.name]: event.target.value });
    
  };

  const handleSubmit = (event) => {
  
      event.preventDefault();
        addPerson(personInfo);
        setpersonInfo({ name: "", lastname: "", age: "" ,nationality: "",email: "" });
  
  };

  

  return (
    
    <div class="formUser">
    
      <form onSubmit={handleSubmit} >
        <div>
          <h3>Person Form</h3>
        </div>
        <div class="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={personInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={personInfo.lastname}
            onChange={handleChange}
            required
          />
        </div>     
        <div class="form-group">
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={personInfo.age}
            onChange={handleChange}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            value={personInfo.nationality}
            onChange={handleChange}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={personInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};