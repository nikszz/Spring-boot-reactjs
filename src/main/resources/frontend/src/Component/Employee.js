import React, { Component } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = { fname: "", lname: "", dept: "", addr: "" };
    this.empChange = this.empChange.bind(this);
    this.submitEmp = this.submitEmp.bind(this);
  }

  submitEmp(event) {
    alert(this.state.fname);
    event.preventDefault();
  }

  empChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header>Add Employee</Card.Header>
        <Form onSubmit={this.submitEmp} id="EmpFormId">
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridfname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="fname"
                  value={this.state.fname}
                  onChange={this.empChange}
                  placeholder="Enter First Name"
                  className="bg-dark text-white"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridlname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="lname"
                  value={this.state.lname}
                  onChange={this.empChange}
                  placeholder="Enter Last Name"
                  className="bg-dark text-white"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridDept">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="dept"
                  value={this.state.dept}
                  onChange={this.empChange}
                  placeholder="Enter Department"
                  className="bg-dark text-white"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddr">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="addr"
                  value={this.state.addr}
                  onChange={this.empChange}
                  placeholder="Enter Address"
                  className="bg-dark text-white"
                />
              </Form.Group>
            </Form.Row>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
