package com.SpringReactProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SpringReactProject.Model.Employee;

import jakarta.persistence.Id;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{
	
}