import { Component, inject, OnInit } from '@angular/core';
import { TodoReturnTypes, TodoService } from './todo.service';

@Component({
  selector: 'ob-todos',
  imports: [],
  templateUrl: './todo.component.html',
  styles: ``,
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoService);

  users: TodoReturnTypes<'getUsers'> = [];

  async ngOnInit() {
    const users = await this.todoService.getUsers();
    console.log(users);
  }
}
