import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo'
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[]

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos()
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }

  sortBy(direction: string): void {
    this.todoService.getTodosOrderBy(direction).subscribe(todos => this.todos = todos)
  }
}
