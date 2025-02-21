import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { trpcClient } from '../../trpcClient';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  trpcClient = trpcClient;

  public getUsers() {
    return this.trpcClient.getUser.query('...');
  }

  public getObservableUsers() {
    return from(this.trpcClient.getUser.query('...'));
  }
}
