package com.project.Repository;

import org.springframework.data.repository.CrudRepository;

import com.project.Pojo.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Integer>{
	

}
