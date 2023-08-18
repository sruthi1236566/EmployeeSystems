import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function CreateEmployeeComponent(props) {
   const [empData, setEmpData]=useState({
        firstName:'',
        lastName:'',
        emailId:''
    });
    const navigateHistory = useNavigate();

    const cancel = () => {
        navigateHistory('/employees');
        console.log('Cancel clicked');
    };

    const saveEmployee=(e)=>{
        e.preventDefault();
        console.log('Saving employee:', empData);

       setEmpData({
            firstName: '',
            lastName: '',
            emailId: ''
        });

EmployeeService.createEmployee(empData).then(res=>{
    navigateHistory('/employees');
})
    }
    const changeHandler=(e)=>{
        const {name,value}=e.target;
        setEmpData({
            ...empData,
            [name]:value
        });
    };
    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md'>
<h3 className='text-center'>Add-Employee</h3>
<div className='card-body'></div>
<form>
    <div className='form-group'>
        <label> First Name: </label> 
        <input placeholder='Enter First Name' name='firstName' className='form-control'
        value={empData.firstName} onChange={changeHandler}/>
        <label> Last Name: </label> 
        <input placeholder='Enter Last Name' name='lastName' className='form-control'
        value={empData.lastName} onChange={changeHandler}/>
        <label> Email_ID: </label> 
        <input placeholder='Enter Email ID' name='emailId' className='form-control'
        value={empData.emailId} onChange={changeHandler}/>
  
    <button className='btn btn-success mt-2' onClick={saveEmployee}>Save</button>

    <button className="btn btn-danger mt-2 ml-2" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
    </div>
</form>
                </div>
            </div>
        </div>
    );
}

export default CreateEmployeeComponent;