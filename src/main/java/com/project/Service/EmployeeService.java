package com.project.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Pojo.Employee;
import com.project.Repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository repo;

	public List<Employee> get() {
		return (List<Employee>) repo.findAll();
	}

	public Optional<Employee> get(int id) {
		return repo.findById(id);
	}

	public void save(Employee employee) {
		repo.save(employee);
		
	}

	public void delete(Employee employee) {
		repo.delete(employee);;
		
	}

	
}
