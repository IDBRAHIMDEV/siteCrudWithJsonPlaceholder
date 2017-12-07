import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: any[];
  
    etat: boolean = true;
    etatForm: boolean = false;
  
    album= {
      id : 0,
      userId: 1,
      title: ''
    }

      constructor(private albumsService: AlbumsService) { }
    
      ngOnInit() {
        this.albumsService.getAlbums()
        .subscribe(response => {
          this.albums = response.json();
        })
    
      }
    
      createAlbum() {
       this.albumsService.creatAlbum(this.album)
        .subscribe(response => {
          this.album.id = response.json().id;
          console.log(this.album)
          this.albums.unshift(this.album);
          this.etatForm = false;
        })
      }
    
      editAlbum(album) {
        this.album= album;
        this.etat = false;
        this.etatForm = true;
      }
    
      updateAlbum() {
        this.albumsService.updateAlbum(this.album)
        .subscribe(response => {
          console.log(this.album)
    
          this.etat = true;
          this.album = {
            id : 0,
            userId: 1,
            title: ''
          }
    
          this.etatForm = false;
    
      })
    
    }
    
    deleteAlbum(album) {
      this.albumsService.deleteAlbum(album)
      .subscribe(response => {
        let index = this.albums.indexOf(album);
        this.albums.splice(index, 1);
      })
    }
    
    addNewTodo() {
      this.etat = true;
      this.album = {
        id : 0,
        userId: 1,
        title: ''
        
      }
      }

}
