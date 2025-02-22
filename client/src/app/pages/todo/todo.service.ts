import { Injectable } from '@angular/core';
import { trpcClient } from '../../trpcClient';

// Extract only function keys
type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: unknown[]) => unknown ? K : never;
}[keyof T];

// Get function names as a string union type

export type TodoReturnTypes<T extends FunctionKeys<TodoService>> = Awaited<
  ReturnType<TodoService[T]>
>;

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  trpcClient = trpcClient;

  getUsers() {
    return this.trpcClient.user.getUsers.query();
  }

  tester() {
    return this.trpcClient.user.createUser.mutate();
  }
}
