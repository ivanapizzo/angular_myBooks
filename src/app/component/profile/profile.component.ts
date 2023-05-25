import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {

  public user:User;

  constructor(){

    this.user = new User(127, "Ivana", "Pizzo Logioio", "ivb.pizzo@gmail.com", "")

    
  }

  public showName(name:string) {

    this.user.name = name;
  }


  public changeUser(name:string, first_last_name:string, email:string, photo:string) {

    this.user.name = name;
    this.user.first_last_name = first_last_name;
    this.user.email = email; 
    this.user.photo = photo;

  }

}

