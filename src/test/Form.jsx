import React, { useState, useEffect } from "react";
import '../App.css'
import{useNavigate} from 'react-router-dom'
const Form = () => {
  const navigate = useNavigate()
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState(0);
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    if (!fullname || !gender || !education || !DOB || !phone) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    
  }, [fullname, gender, education, DOB, phone]);

  function checkDOB() {
    var dateString = DOB
    var myDate = new Date(dateString);
    var today = new Date();
    if ( myDate >= today ) { 
        return false;
    }else{
      return true;
    }
    
   
}
  const formHandler = (e) => {
    e.preventDefault();
    let userData
     
   if(phone.length !== 10){
    alert("Please Enter Valid Contact Number")
   }
   else if(!checkDOB()){
    alert("Please select Correct Date")
   }
   else{
    userData={
      fullname:fullname,
       gender:gender,
        education:education,
         DOB:DOB,
          phone:phone
    }
    localStorage.setItem("data",JSON.stringify(userData));
navigate('/result')
   }
   
  };

  return (
   <div className="container">
     <form onSubmit={formHandler}>
      <h2>Form Input</h2>
      <div className="formContainer">
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          name="fullname"
          onChange={(e) => setFullname(e.target.value)}
          id="fullname"
        />
      </div>
      <div className="formContainer">
        <label htmlFor="phone">Contact No:</label>
        <input
          id="phone"
          type="number"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="formContainer">
        <label htmlFor="date">DOB</label>
        <input
          id="date"
          type="date"
          name="date"
          onChange={(e) => setDOB(e.target.value)}
        />
      </div>
     <div className="radios">
     <div className="formContainer">
        <label htmlFor="maleGender">Male</label>
        <input
          id="maleGender"
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className="formContainer">
        <label htmlFor="femaleGender">female</label>
        <input
          id="femaleGender"
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className="formContainer">
        <label htmlFor="other">Other</label>
        <input
          id="other"
          type="radio"
          name="gender"
          value="other"
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
     </div>

      <div className="formContainer">
        <select name="education" onChange={(e) => setEducation(e.target.value)}>
          <option>select</option>
          <option value="graduate">Graduate</option>
          <option value="sr.Secondary">sr. Secondary</option>
          <option value="secondary">Secondary</option>
        </select>
      </div>

      <button type="submit" disabled={disable ? true : false}>
        Submit
      </button>
    </form>
   </div>
  );
};

export default Form;
