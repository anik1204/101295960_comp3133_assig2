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
      query loginUser($loginInput: LoginInput!) {
        loginUser(loginInput: $loginInput) {
          status
          success
          message
        }
      }
    `;
  
    return this.apollo.watchQuery({
      query: LOGIN_USER,
      variables: {
        loginInput: {
          email,
          password
        }
      }
    }).valueChanges;
  }
  
}