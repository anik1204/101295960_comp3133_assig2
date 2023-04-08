import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { RegisterResponse } from '../types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = 'Sign Up';
  username: string = "";
  password: string = "";
  email: string = "";
  errorMessage: any = '';


  constructor(private api: ApiService, private router: Router) { }


  handleSignup() {
    this.api.registerUser(this.username, this.email, this.password).subscribe(
      (result: any) => {
        const registerResponse: RegisterResponse = result.data.register;
        if (registerResponse.success) {
          // Save the user data to local storage and navigate to the next page
          localStorage.setItem('user', this.email);
          // Navigate to /employees
          this.router.navigate(['/employees']);
        } else {
          this.errorMessage = registerResponse.message;
          console.log('Login failed:', registerResponse.message);
        }
        
      },
      (error) => {
        console.error('Error:', error);
      },
    );
  }
}
