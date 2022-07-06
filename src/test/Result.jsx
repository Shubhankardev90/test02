import React,{useState} from 'react'

const Result = () => {
    const [resData,setResData]=useState(JSON.parse(localStorage.getItem("data")))
  return (
   <div className="resultContainer">
    <div className="result">
        <h1>Response Data</h1>
        <table>
           <tbody>
           <tr>
                <td><strong>Name</strong></td>
                <td>: {resData.fullname}</td>
            </tr>
            <tr>
                <td><strong>Gender</strong></td>
                <td>: {resData.gender}</td>
            </tr>
            <tr>
                <td><strong>Phone</strong></td>
                <td>: {resData.phone}</td>
            </tr>
            <tr>
                <td><strong>Date of Birth</strong></td>
                <td>: {resData.DOB}</td>
            </tr>
            <tr>
                <td><strong>Education</strong></td>
                <td>: {resData.education}</td>
            </tr>
           </tbody>
        </table>
    </div>
   </div>
  )
}

export default Result