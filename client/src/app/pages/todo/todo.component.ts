import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TodoFormComponent } from './components/todo-form.component';
import { TodoReturnTypes, TodoService } from './todo.service';

@Component({
  selector: 'ob-todos',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    TodoFormComponent,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: './todo.component.html',
  styles: ``,
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoService);
  todos = signal<TodoReturnTypes<'getTodos'>>([]);
  userId = '67a685ecefffacd65cf995c9';

  async ngOnInit() {
    await this.refreshTodos();
  }

  async addTodo({ text }: { text: string }) {
    console.log('addTodo', text);
    await this.todoService.createTodo({ text, userId: this.userId });
    await this.refreshTodos();
  }

  async toggleTodo({ id, isDone }: { id: string; isDone: boolean }) {
    await this.todoService.toggleTodo({ id, isDone });
    await this.refreshTodos();
  }

  async refreshTodos() {
    const todos = await this.todoService.getTodos();
    this.todos.set(todos);
  }

  async deleteTodo({ id }: { id: string }) {
    await this.todoService.deleteTodo({ id });
    await this.refreshTodos();
  }
}
