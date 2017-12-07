import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }


url= "https://jsonplaceholder.typicode.com/users"

getUsers() {
return this.http.get(this.url)
}



}
