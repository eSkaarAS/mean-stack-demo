import { Component, OnInit, WritableSignal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeFormComponent } from './employee-form.component';

@Component({
  selector: 'ob-edit-employee',
  imports: [EmployeeFormComponent, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Edit an Employee</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <ob-employee-form
          [initialState]="employee()"
          (formSubmitted)="editEmployee($event)"
        ></ob-employee-form>
      </mat-card-content>
    </mat-card>
  `,
  styles: ``,
})
export class EditEmployeeComponent implements OnInit {
  employee = {} as WritableSignal<Employee>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('No id provided');
    }

    this.employeeService.getEmployee(id!);
    this.employee = this.employeeService.employee$;
  }

  editEmployee(employee: Employee) {
    this.employeeService
      .updateEmployee(this.employee()._id || '', employee)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          alert('Failed to update employee');
          console.error(error);
        },
      });
  }
}
