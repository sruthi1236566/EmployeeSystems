package com.SpringReactProject.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SpringReactProject.Exception.ResourceNotFoundException;
import com.SpringReactProject.Model.Employee;
import com.SpringReactProject.Repository.EmployeeRepository;

import ch.qos.logback.core.net.SyslogOutputStream;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
@Autowired
	private EmployeeRepository employeeRepository;
@GetMapping("/employees")
public List<Employee> getAllEmployees(){
	return employeeRepository.findAll();
	
}
//create Add Employee 
@PostMapping("/employees")
public Employee createEmployee(@RequestBody Employee employee) {
	return employeeRepository.save(employee);
}

//Get employee by ID
@GetMapping("/employees/{id}")
public ResponseEntity<Employee> getEmployeeId(@PathVariable Long id) {
	Employee employee=employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: "+id));
   return ResponseEntity.ok(employee);
}
//To update the data by ID
@PutMapping("/employees/{id}")
public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee emplDetails ) {
	Employee employee=employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: "+id));
     employee.setFirstName(emplDetails.getFirstName());
     employee.setLastName(emplDetails.getLastName());
     employee.setEmailId(emplDetails.getEmailId());
    Employee EmpUpdateSave= employeeRepository.save(employee);
    return ResponseEntity.ok(EmpUpdateSave);
}


//To delete employee by ID
@DeleteMapping("/employees/{id}")
public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id  ){
	Employee employee=employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: "+id));
	employeeRepository.delete(employee);
	Map<String, Boolean> response =new HashMap<>();
	response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
	
}

}
