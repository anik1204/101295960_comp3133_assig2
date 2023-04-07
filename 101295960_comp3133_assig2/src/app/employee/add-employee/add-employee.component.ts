import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
first_name: string = "";
  last_name: string = "";
  gender: string = "";
  salary: number = 0;
  email: string = "";

  constructor(private router: Router, private api: ApiService) {}

  handleSave() {
    this.api.createEmployee(this.first_name, this.last_name, this.email, this.gender, this.salary).subscribe(
      (result: any) => {
        console.log(result)
        const response: any = result.data.createEmployee;
        if (response.success) {
          
          // Navigate to /employees
          this.router.navigateByUrl('/employees', { skipLocationChange: false }).then(() => {
            window.location.reload();
          });
        } else {
          console.log('Create failed:', response.message);
        }
        
      },
      (error) => {
        console.error('Error:', error);
      },
    );
  }
}
