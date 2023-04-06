import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
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
    constructor(private router: Router, private api: ApiService) {}
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

  ngOnInit(): void {
    this.api.getEmployees().subscribe(
      (result: any) => {
        this.employees = result.data.employees;
        console.log(this.employees);
      },
      (error) => {
        console.error('Error:', error);
      },
    );
  }
}
