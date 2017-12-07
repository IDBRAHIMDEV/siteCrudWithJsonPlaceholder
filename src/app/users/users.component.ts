import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 
 
  users: any[];
  
    etat: boolean = true;
    etatForm: boolean = false;
  
    
  
    constructor(private userService: UsersService) { }
  
    ngOnInit() {
      this.userService.getUsers()
      .subscribe(response => {
        this.users = response.json();
      })
  
    }
  
   
  
  }

