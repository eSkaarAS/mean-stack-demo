import { Injectable } from '@angular/core';
import { trpcClient } from '../../trpcClient';

export type ReturnTRPC<T extends () => Promise<unknown>> = Awaited<
  ReturnType<T>
>;

// Extract only function keys
type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: unknown[]) => unknown ? K : never;
}[keyof T];

// Get function names as a string union type
export type TodoServiceMethodNames = FunctionKeys<TodoService>;

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  trpcClient = trpcClient;

  getUsers() {
    return this.trpcClient.user.getUsers.query();
  }
}
