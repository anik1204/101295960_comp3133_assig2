
import { Component } from "@angular/core";
@Component({
    selector: "app-root",
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})


export class AppComponent {
    title = "Employee Management System";
    password: string = "";
    email: string = "";

    handleLogin() {
        console.log("Email: " + this.email + " Password: " + this.password);
    }
}