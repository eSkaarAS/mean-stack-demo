import { Routes } from '@angular/router';
import { routePaths } from './appRouteTypes';
import { ChatWindow } from './components/chat/chat-window.component';
import { AddEmployeeComponent } from './components/employee/components/add-employee.component';
import { EditEmployeeComponent } from './components/employee/components/edit-employee.component';
import { EmployeesListComponent } from './components/employee/components/employees-list.component';

export const routes: Routes = [
  {
    path: routePaths.employeesList,
    component: EmployeesListComponent,
    title: 'Employees List',
  },
  {
    path: routePaths.addEmployee,
    component: AddEmployeeComponent,
    title: 'Add Employee',
  },
  {
    path: routePaths.editEmployee,
    component: EditEmployeeComponent,
    title: 'Edit Employee',
  },
  {
    path: routePaths.chat,
    component: ChatWindow,
    title: 'Chat',
  },
] as const;
