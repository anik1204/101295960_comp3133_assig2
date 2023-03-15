import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = 'Sign Up';
  first_name: string = "";
  last_name: string = "";
  gender: string = "";
  salary: number = 0;
  password: string = "";
  email: string = "";

  handleSignup() {
      console.log("Email: " + this.email + " Password: " + this.password);
  }
}
