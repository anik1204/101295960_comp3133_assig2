import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { EmployeesComponent } from './employees/employees.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';



@NgModule({
    declarations: [AppComponent, EmployeesComponent, LoginComponent, SignupComponent, PageNotFoundComponent, EmployeeComponent, AddEmployeeComponent, EditEmployeeComponent],
    imports: [BrowserModule, NgbModule, FormsModule,RouterModule.forRoot([
        {path: 'login', component: LoginComponent},
        {path: 'signup', component: SignupComponent},
        { path: 'employees', component: EmployeesComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'employee/edit', component: EditEmployeeComponent },
      { path: 'employee/add', component: AddEmployeeComponent },
        {path: '', redirectTo: '/login', pathMatch: 'full'},
        {path: '**', component: PageNotFoundComponent}
      ]), FontAwesomeModule, ],
    bootstrap: [AppComponent],
})

export class AppModule { }