import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AlbumsService {

  constructor(private http: Http) { }
  
  
  url= "https://jsonplaceholder.typicode.com/albums"
  
  getAlbums() {
  return this.http.get(this.url)
  }
  
  creatAlbum(album){
  return  this.http.post(this.url, album)
  }
  
  updateAlbum(album) {
    return  this.http.put(this.url+'/'+album.id, album)
  
  }
  
  deleteAlbum(album) {
    return  this.http.delete(this.url+'/'+album.id)
  
  }
  

}
