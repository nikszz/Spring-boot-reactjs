package com.project.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Pojo.Employee;
import com.project.Service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/api")
public class EmpController {

	@Autowired
	private EmployeeService employeeService;

	@GetMapping("/employee")
	public List<Employee> get() {
		return employeeService.get();
	}

	@PostMapping("/employee")
	public Employee save(@RequestBody Employee employee) {
		employeeService.save(employee);
		return employee;
	}

	@GetMapping("/employee/{id}")
	public Optional<Employee> get(@PathVariable int id) {
		return employeeService.get(id);
	}

	@DeleteMapping("/employee/{id}")
	public String delete(@PathVariable int id , Employee employee) {
		employee.setId(id);
		employeeService.delete(employee);
		return "Employee removed with id " + id;
	}

	@PutMapping("/employee")
	public Employee update(@RequestBody Employee employee) {
		employeeService.save(employee);
		return employee;
	}
}