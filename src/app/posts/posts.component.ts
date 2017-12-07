import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 
  posts: any[];
  
    etat: boolean = true;
    etatForm: boolean = false;
  
    post= {
      id : 0,
      userId: 1,
      title: '',
      body: ''
    }
  
    constructor(private postService: PostsService) { }
  
    ngOnInit() {
      this.postService.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      })
  
    }
  
    createPost() {
     this.postService.creatPost(this.post)
      .subscribe(response => {
        this.post.id = response.json().id;
        console.log(this.post)
        this.posts.unshift(this.post);
        this.etatForm = false;
      })
    }
  
    editPost(post) {
      this.post= post;
      this.etat = false;
      this.etatForm = true;
    }
  
    updatePost() {
      this.postService.updatePost(this.post)
      .subscribe(response => {
        console.log(this.post)
  
        this.etat = true;
        this.post = {
          id : 0,
          userId: 1,
          title: '',
          body: ''  
        }
  
        this.etatForm = false;
  
    })
  
  }
  
  deletePost(post) {
    this.postService.deletePost(post)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    })
  }
  
  addNewPost() {
    this.etat = true;
    this.post = {
      id : 0,
      userId: 1,
      title: '',
      body: ''  
  
    }
  
  }


}
