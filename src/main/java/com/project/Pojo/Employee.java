package com.project.Pojo;

import javax.persistence.Entity;
import org.springframework.data.annotation.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="reactdb")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Id;
	private String fname;
	private String lname;
	private String dept;
	private String addr;
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	
	@Override
	public String toString() {
		return "Emoployee [Id=" + Id + ", fname=" + fname + ", lname=" + lname + ", dept=" + dept + ", addr=" + addr
				+ "]";
	}

	
}
