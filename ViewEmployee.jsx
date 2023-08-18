import React ,{ useState, useEffect } from 'react';

import { useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'; 

function ViewEmployee(props) {

    const { id } = useParams();

    const [empData, setEmpData] = useState({
        id: id,
        firstName: '',
        lastName: '',
        emailId: ''
    });
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
    return (
        <div>
           
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> { empData.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> { empData.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID: </label>
                            <div> { empData.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
         
        </div>
    );
}

export default ViewEmployee;