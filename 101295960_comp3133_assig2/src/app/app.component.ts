
import { Component } from "@angular/core";
import { AuthComponent } from "./auth/auth.component";
import { Router } from "@angular/router";
@Component({
    selector: "app-root",
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})


export class AppComponent {
    title = "Employee Management System";
    isDisabled = false;
    constructor(private router: Router) { }
    get isLoginPage() {
        return this.router.url === '/login' || this.router.url === '/signup';
      }

      logout() {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login');
      }
}