import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsService } from './posts.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosComponent,
    AlbumsComponent,
    UserComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
