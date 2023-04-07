import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  employee = history.state.data;
  _id: string = this.employee._id;
  first_name: string = this.employee.first_name;
  last_name: string = this.employee.last_name;
  gender: string = this.employee.gender;
  salary: number = this.employee.salary;
  email: string = this.employee.email;


  constructor(private router: Router, private api: ApiService) {}

  handleSave() {
    console.log(this._id)
    this.api.editEmployee(this._id, this.first_name, this.last_name, this.email, this.gender, this.salary).subscribe(
      (result: any) => {
        const response: any = result.data.editEmployee;
        if (response.success) {
          
          // Navigate to /employees
          this.router.navigateByUrl('/employees', { skipLocationChange: false }).then(() => {
            window.location.reload();
          });
        } else {
          console.log('Edit failed:', response.message);
        }
        
      },
      (error) => {
        console.error('Error:', error);
      },
    );
  }
}
