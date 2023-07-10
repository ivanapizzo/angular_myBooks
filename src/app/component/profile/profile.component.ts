import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {

  public user:User;

  constructor(private formBuilder: FormBuilder, public userService: UserService, private router:Router){

    this.user = new User(
                0, 
                "Ivana", 
                "Pizzo Logioio", 
                "ivb.pizzo@gmail.com", 
                "",
                "https://media.licdn.com/dms/image/D4D03AQHJsuZ6Z5SrHw/profile-displayphoto-shrink_800_800/0/1679954552478?e=2147483647&v=beta&t=5DGJjcJuMLUDT0ORobbfIDepf_ByOjd1KK_NQlCvi_8",
                )

  }


  public showName(name:string) {

    this.user.name = name;
  }


  public changeUser(name:string, first_last_name:string, email:string, photo:string) {

    let modify: boolean = false;

    if (name != '') {
      this.user.name = name;
      modify = true;
    }
    if (first_last_name != ''){
      this.user.first_last_name = first_last_name;
      modify = true;
    }
    if (email != '') {
      this.user.email = email;
      modify = true;
    }
    if (photo != ''){
      this.user.photo = photo;
      modify = true;
    }

    if (modify == true) {
      this.userService.modifyUser(this.user).subscribe((data:User[]) => {
        this.userService.user = data[0];
        console.log(data);
        this.router.navigateByUrl('/profile');
      })
    }
    
  }

}

