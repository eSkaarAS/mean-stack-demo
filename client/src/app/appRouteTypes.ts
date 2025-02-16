export const routePaths = {
  employeesList: '',
  addEmployee: 'new',
  editEmployee: 'edit/:id',
  chat: 'chat',
  home: '',
  academy: 'academy',
  meetings: 'meetings',
  messages: 'messages',
  owners: 'owners',
} as const;

export type RoutePath = (typeof routePaths)[keyof typeof routePaths];
