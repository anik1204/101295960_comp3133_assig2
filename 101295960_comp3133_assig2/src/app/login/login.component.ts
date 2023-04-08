import { Component } from '@angular/core';
import { LoginResponse } from '../types';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Login';
  password: string = '';
  email: string = '';
  errorMessage: any = '';

  constructor(private loginService: LoginService, private router: Router) { }

  handleLogin() {
    
    console.log('Email: ' + this.email + ' Password: ' + this.password);
    this.loginService.loginUser(this.email, this.password).subscribe(
      (result: any) => {
        const loginResponse: LoginResponse = result.data.loginUser;
        if (loginResponse.success) {
          console.log('Login successful');
          console.log('User:', loginResponse.user);
      
          // Save the user data to local storage and navigate to the next page
          // Navigate to /employees
          localStorage.setItem('user', this.email);
          this.router.navigate(['/employees']);
        } else {
          this.errorMessage = loginResponse.message;
          console.log('Login failed:', loginResponse.message);
        }
        console.log('Result:', result)
      },
      (error) => {
        console.error('Error:', error);
      },
    );
  }
}