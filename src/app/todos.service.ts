import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TodosService {

  constructor(private http: Http) { }
  
  
  url= "https://jsonplaceholder.typicode.com/todos"
  
  getTodos() {
  return this.http.get(this.url)
  }
  
  creatTodo(todo){
  return  this.http.post(this.url, todo)
  }
  
  updateTodo(todo) {
    return  this.http.put(this.url+'/'+todo.id, todo)
  
  }
  
  deleteTodo(todo) {
    return  this.http.delete(this.url+'/'+todo.id)
  
  }
  

}
