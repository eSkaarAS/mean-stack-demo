export const routePaths = {
  employeesList: '',
  addEmployee: 'new',
  editEmployee: 'edit/:id',
  chat: 'chat',
} as const;

export type RoutePath = (typeof routePaths)[keyof typeof routePaths];
