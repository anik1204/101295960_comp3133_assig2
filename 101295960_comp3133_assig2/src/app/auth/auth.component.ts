import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  user: string | null = null;
  
  constructor(private router: Router) {
    this.auth();
  }

  auth() {
    this.user = localStorage.getItem('user');
    console.log("user ", this.user);
    this.user == null ? this.router.navigateByUrl('/login') : null;
  }
}