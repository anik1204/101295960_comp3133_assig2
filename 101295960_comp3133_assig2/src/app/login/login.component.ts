import { Component } from '@angular/core';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Login';
  password: string = '';
  email: string = '';

  constructor(private loginService: LoginService) {} // Inject the GraphqlService

  handleLogin() {
    console.log('Email: ' + this.email + ' Password: ' + this.password);
    this.loginService.loginUser(this.email, this.password).subscribe(
      (result) => {
        if (result.data.loginUser.success) {
          console.log('Login successful');
          console.log('User:', result.data.loginUser.user);
          console.log('Token:', result.data.loginUser.token);
          // Save the token to local storage and navigate to the next page
        } else {
          console.log('Login failed:', result.data.loginUser.message);
        }
      },
      (error) => {
        console.error('Error:', error);
      },
    );
  }
}
