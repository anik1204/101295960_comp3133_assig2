import { Component } from '@angular/core';

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

    handleDelete(employeeId: number) {
        console.log(employeeId)
    }
}
