import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private apollo: Apollo) {}

  registerUser(username: string, email: string, password: string) {
    const register_user = gql`
    mutation Register($registerInput: RegisterInput) {
      register(registerInput: $registerInput) {
        status
        success
        message
      }
    }
    `;
  
    return this.apollo.mutate({
      mutation: register_user,
      variables: {
        registerInput: {
          username,
          email,
          password
        }
      }
    });
  }

  getEmployees() {
    const get_employees = gql`
    query {
      employees {
        _id
        first_name
        last_name
        email
        gender
        salary
      }
    }
    `;

    return this.apollo.watchQuery({
      query: get_employees
    }).valueChanges;
  }

  getEmployee(id: string) {
    const get_employee = gql`
    query getEmployee($id: String!) {
      employee(id: $id) {
        _id
        first_name
        last_name
        email
        gender
        salary
      }
    }`;

    return this.apollo.watchQuery({
      query: get_employee,
      variables: {
        id
      }
    }).valueChanges;
  }
  
  editEmployee(id: string, first_name: string, last_name: string, email: string, gender: string, salary: number) {
    const EDIT_EMPLOYEE_MUTATION = gql`
  mutation EditEmployee($id: ID!, $employeeInput: EmployeeInput!) {
    editEmployee(id: $id, employeeInput: $employeeInput) {
      success
      message
    }
  }
`;

    return this.apollo.mutate({
      mutation: EDIT_EMPLOYEE_MUTATION,
      variables: {
        id,
        employeeInput : {
          first_name,
          last_name,
          email,
          gender,
          salary
        }
      }
    })
  }

  deleteEmployee(id: string) {
    const DELETE_EMPLOYEE_MUTATION = gql`
  mutation DeleteEmployee($id: ID!) {
    deleteEmployee(id: $id) {
      success
      message
    }
  }`;

    return this.apollo.mutate({
      mutation: DELETE_EMPLOYEE_MUTATION,
      variables: {
        id
      }
    })
  }

  createEmployee(first_name: string, last_name: string, email: string, gender: string, salary: number){
    const CREATE_EMPLOYEE_MUTATION = gql`
    mutation CreateEmployee($employeeInput: EmployeeInput) {
      createEmployee(employeeInput: $employeeInput) {
        success
        message
      }
    }`;

    return this.apollo.mutate({
      mutation: CREATE_EMPLOYEE_MUTATION,
      variables: {
        employeeInput: {
          first_name,
          last_name,
          email,
          gender,
          salary
        }
      }
    })
  }
}