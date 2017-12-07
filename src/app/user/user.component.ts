import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  idUser;
  posts: any[];
  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(response => {
      this.idUser = response.get('id');
    }) 
    this.userService.getPostsUser(this.idUser)
    .subscribe(response => {
      console.log(response.json())
      this.posts = response.json();
    })
  }

 

}
