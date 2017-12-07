import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent }, 
  {path: 'albums', component: AlbumsComponent},
  {path: 'posts', component: PostsComponent },
  {path: 'todos', component: TodosComponent},
  {path: 'users', children: [
    {path: '', component: UsersComponent},
    {path: 'show/:id', component: UserComponent},
  ]},
  {path: '**', redirectTo: '/home'}
  //{path: '**', component: NotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
