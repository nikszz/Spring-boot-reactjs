import React, { Component } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
import axios from 'axios';

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.empChange = this.empChange.bind(this);
    this.submitEmp = this.submitEmp.bind(this);
  }

  initialState = {
    fname: "", lname: "", dept: "", addr: ""
  }
  submitEmp = event => {
    event.preventDefault();
    const emp = {

    }
  }

  resetEmp= () => {
    this.setState(() => this.initialState);
  }

  empChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { fname, lname, dept, addr } = this.state;
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header>Add Employee</Card.Header>
        <Form onReset={this.resetEmp} onSubmit={this.submitEmp} id="EmpFormId">
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridfname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="fname"
                  autoComplete="off"
                  value={fname}
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
                  autoComplete="off"
                  value={lname}
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
                  autoComplete="off"
                  value={dept}
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
                  autoComplete="off"
                  value={addr}
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
            {' '}
            <Button size="sm" variant="info" type="reset">
              Reset
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
