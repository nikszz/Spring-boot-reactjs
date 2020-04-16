import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
import axios from 'axios';

export default class ListEmployee extends Component {

    constructor(props){
        super(props);
        this.state = {
          emp: []
        }
    }

    componentDidMount(){
      axios.get("http://localhost:8080/api/employee")
        .then(response => console.log(response.data))
    }

  render() {
  
    return (
      <Card className="border border-dark bg-dark text-white">
        <Card.Header>Employee List</Card.Header>
        <Card.Body>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              <tr align="center">
                <td colSpan="6">No Employee Available.</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}
