export const routePaths = {
  employeesList: '',
  addEmployee: 'new',
  editEmployee: 'edit/:id',
  chat: 'chat',
  home: '',
} as const;

export type RoutePath = (typeof routePaths)[keyof typeof routePaths];
