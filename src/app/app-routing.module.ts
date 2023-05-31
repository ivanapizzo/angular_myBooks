
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { CardComponent } from './component/card/card.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'booksPage', component: BooksComponent},
  {path: 'card', component: CardComponent},
  {path: 'add_book', component: AddBookComponent},
  {path: 'update-book', component: UpdateBookComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
