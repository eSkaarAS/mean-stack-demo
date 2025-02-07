import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { routePaths } from './appRouteTypes';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

export const routes: Routes = [
  {
    path: routePaths.employeesList,
    component: EmployeesListComponent,
    title: 'Employees List',
  },
  { path: routePaths.addEmployee, component: AddEmployeeComponent },
  { path: routePaths.editEmployee, component: EditEmployeeComponent },
] as const;
