import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }


url= "https://jsonplaceholder.typicode.com/posts"

getPosts() {
return this.http.get(this.url)
}

creatPost(post){
return  this.http.post(this.url, post)
}

updatePost(post) {
  return  this.http.put(this.url+'/'+post.id, post)

}

deletePost(post) {
  return  this.http.delete(this.url+'/'+post.id)

}


}
