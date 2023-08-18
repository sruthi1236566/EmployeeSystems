import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';


function ListEmployeeComponent(props) {
    const [employees, setEmployees] = useState([]);
    const navigateHistory = useNavigate();


    const deleteEmployee=(id)=>{
        console.log('deleting employee');
        EmployeeService.deleteEmployee(id)
            .then(res => {

                setEmployees(employees.filter(employees =>employees.id !== id));

            })
            .catch(error => {
                console.error('Error deleting employee:', error);
            });
    }

    const viewEmployee=(id)=>{
        navigateHistory(`/viewEmp/${id}`);

        
    }
    const addEmployee = () => {
        navigateHistory('/addEmp');
    };

    const editEmployee = (id) => {
        navigateHistory(`/updEmp/${id}`);
    };

    useEffect(() => {
        EmployeeService.getEmployees()
            .then(response => setEmployees(response.data))
            .catch(error => console.error("Error fetching employees:", error));
    }, []);

    return (
        <div>
            <h2 className='text-center'>Employee-List</h2>
         
            <button className='btn btn-primary' style={{ marginBottom: '20px' }} onClick={addEmployee}> Add Employee</button>
          
           
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee First-Name</th>
                            <th>Employee Last-Name</th>
                            <th>Employee Email-ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <button onClick={() => editEmployee(employee.id)} className='btn btn-info'>Update</button>
                                    <button onClick={() => deleteEmployee(employee.id)} className='btn btn-danger' style={{ marginLeft: '10px' }} >Delete</button>
                                    <button onClick={() => viewEmployee(employee.id)} className='btn btn-secondary' style={{ marginLeft: '10px'}} >View</button>

                                </td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;
