import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
    employees = [{
      first_name: "Tom",
      last_name: "Hanks",
      gender: "Male",
      salary: 0,
      id: 1,
    }
    ];
    constructor(private router: Router) {}
    handleDelete(employeeId: number) {
        console.log(employeeId)
  }
  
  handleEdit(employee: any) {
    console.log(employee);
    this.router.navigate(['/employee/edit'], {state: {data: employee}});
  }
  handleView(employee: any) {
    console.log(employee);
    this.router.navigate(['/employee'], {state: {data: employee}});
  }
}
