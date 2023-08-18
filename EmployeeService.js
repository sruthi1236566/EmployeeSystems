import axios from 'axios'
const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/v1/employees";
class EmployeeService{
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(jack){
        return axios.post(EMPLOYEE_API_BASE_URL,jack)
    }

    getEmployeeById(empID){
        return axios.get(EMPLOYEE_API_BASE_URL + '/'+empID);

    }
    updateEmployee(empID,employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + empID, employee);
          
    }

    deleteEmployee(empID) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + empID);
          
    }
    

}

export default new EmployeeService()