import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private apollo: Apollo) {}

  loginUser(email: string, password: string) {
    const LOGIN_USER = gql`
      query loginUser($email: String!, $password: String!) {
        loginUser(loginInput: { email: $email, password: $password }) {
          success
          message
          token
          user {
            id
            email
          }
        }
      }
    `;

    return this.apollo.watchQuery<any>({
      query: LOGIN_USER,
      variables: {
        email,
        password,
      },
    }).valueChanges;
  }
}