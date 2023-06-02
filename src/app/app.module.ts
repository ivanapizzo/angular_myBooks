import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { PipeIdBookPipe } from './pipes/pipe-id-book.pipe';
import { PipeUpperLetterPipe } from './pipes/pipe-upper-letter.pipe';
import { CardComponent } from './component/card/card.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormRegisterComponent,
    RegisterComponent,
    ProfileComponent,
    BooksComponent,
    PipeIdBookPipe,
    PipeUpperLetterPipe,
    CardComponent,
    AddBookComponent,
    UpdateBookComponent,
    LoginComponent,
    FormLoginComponent,
    FormsModule, 
    ReactiveFormsModule,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
