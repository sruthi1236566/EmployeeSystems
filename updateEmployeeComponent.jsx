import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'; // Make sure to import your EmployeeService

function UpdateEmployeeComponent(props) {
    const { id } = useParams();
    const navigateHistory = useNavigate();

    const [empData, setEmpData] = useState({
        id: id,
        firstName: '',
        lastName: '',
        emailId: ''
    });

    const cancel = () => {
        navigateHistory('/employees');
        console.log('Cancel clicked');
    };

    useEffect(() => {
        console.log(id);

        EmployeeService.getEmployeeById(id)
            .then((res) => {
                let employee = res.data;
                setEmpData({
                    ...empData,
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                });
            })
            .catch((error) => {
                console.error('Error fetching employee data:', error);
            });
    }, [id]);

    const updateEmployee = (e) => {
        e.preventDefault();
        console.log('updating employee:', empData);

        EmployeeService.updateEmployee(id,empData)
            .then(res => {
                navigateHistory('/employees');
            })
            .catch(error => {
                console.error('Error updating employee:', error);
            });
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setEmpData({
            ...empData,
            [name]: value
        });
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md'>
                    <h3 className='text-center'>Update Employee</h3>
                    <div className='card-body'></div>
                    <form>
                        <div className='form-group'>
                            <label> First Name: </label>
                            <input
                                placeholder='Enter First Name'
                                name='firstName'
                                className='form-control'
                                value={empData.firstName}
                                onChange={changeHandler}
                            />
                            <label> Last Name: </label>
                            <input
                                placeholder='Enter Last Name'
                                name='lastName'
                                className='form-control'
                                value={empData.lastName}
                                onChange={changeHandler}
                            />
                            <label> Email_ID: </label>
                            <input
                                placeholder='Enter Email ID'
                                name='emailId'
                                className='form-control'
                                value={empData.emailId}
                                onChange={changeHandler}
                            />
                            <button className='btn btn-success mt-2' onClick={updateEmployee}>
                                Save
                            </button>
                            <button
                                className='btn btn-danger mt-2 ml-2'
                                onClick={cancel}
                                style={{ marginLeft: '10px' }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateEmployeeComponent;
