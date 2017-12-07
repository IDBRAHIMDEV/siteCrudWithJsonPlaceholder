import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: any[];
  
    etat: boolean = true;
    etatForm: boolean = false;
  
    todo= {
      id : 0,
      userId: 1,
      title: '',
      completed: true
    }

      constructor(private todosService: TodosService) { }
    
      ngOnInit() {
        this.todosService.getTodos()
        .subscribe(response => {
          this.todos = response.json();
        })
    
      }
    
      createTodo() {
       this.todosService.creatTodo(this.todo)
        .subscribe(response => {
          this.todo.id = response.json().id;
          console.log(this.todo)
          this.todos.unshift(this.todo);
          this.etatForm = false;
        })
      }
    
      editTodo(todo) {
        this.todo= todo;
        this.etat = false;
        this.etatForm = true;
      }
    
      updateTodo() {
        this.todosService.updateTodo(this.todo)
        .subscribe(response => {
          console.log(this.todo)
    
          this.etat = true;
          this.todo = {
            id : 0,
            userId: 1,
            title: '',
            completed: true
          }
    
          this.etatForm = false;
    
      })
    
    }
    
    deleteTodo(todo) {
      this.todosService.deleteTodo(todo)
      .subscribe(response => {
        let index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      })
    }
    
    addNewTodo() {
      this.etat = true;
      this.todo = {
        id : 0,
        userId: 1,
        title: '',
        completed: true 
    
      }
    


  }


  }