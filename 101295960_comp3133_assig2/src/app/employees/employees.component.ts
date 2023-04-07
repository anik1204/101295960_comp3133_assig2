import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
    employees = [{
      first_name: "",
      last_name: "",
      gender: "",
      salary: 0,
      id: 1,
    }
    ];
    constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) {}
    handleDelete(employee: any) {
        this.api.deleteEmployee(employee._id).subscribe(
          (result: any) => {
            const response: any = result.data.deleteEmployee;
            if (response.success) {
              // Navigate to /employees
              this.router.navigateByUrl('/employees', { skipLocationChange: false }).then(() => {
                window.location.reload();
              });
            } else {
              console.log('Delete failed:', response.message);
            }
            
          },
          (error) => {
            console.error('Error:', error);
          }
        );
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
