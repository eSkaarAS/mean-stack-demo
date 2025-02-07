export const routePaths = {
  employeesList: '',
  addEmployee: 'new',
  editEmployee: 'edit/:id',
  tester: 'tester',
} as const;

export type RoutePath = (typeof routePaths)[keyof typeof routePaths];
