import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { EmployeesComponent } from './employees/employees.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [AppComponent, EmployeesComponent],
    imports: [BrowserModule, NgbModule, FormsModule],
    bootstrap: [AppComponent],
})

export class AppModule { }