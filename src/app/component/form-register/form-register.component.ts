import { ParseSourceSpan } from '@angular/compiler';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myForm : FormGroup;

  constructor(private formBuilder: FormBuilder, public userService: UserService, private router: Router){

    this.buildForm();
  }

  public register() {

    const user = this.myForm.value;
    console.log(user);
  }

  private buildForm() {

      let minPassLenght:number = 8;
      let minNameLenght:number = 3;

      this.myForm = new FormGroup({

        // 'id_user': new FormControl (null, [Validators.required]),
        'name': new FormControl (null, [Validators.required, Validators.minLength(minNameLenght)]), 
        'first_last_name': new FormControl(null, [Validators.required, Validators.minLength(minNameLenght)]), 
        'email': new FormControl (null, [Validators.required, Validators.email]), 
        'password': new FormControl(null, [Validators.required, Validators.minLength(minPassLenght)]), 
        'retypePassword': new FormControl(null, [Validators.required, Validators.minLength(minPassLenght)]), 
        'photo': new FormControl(null, Validators.required)
  
      })
    }
  
    ngOnInit(): void {

    }
  
    onSubmit(){

      // let id_user = this.myForm.get('id_user').value;
      let name = this.myForm.get('name').value;
      let first_last_name = this.myForm.get('first_last_name').value;
      let email = this.myForm.get('email').value;
      let password = this.myForm.get('password').value;
      let retypePassword = this.myForm.get('retypePassword').value;
      let photo = this.myForm.get('photo').value;

      // console.log(`id_user: ${id_user}`);
      console.log(`name: ${name}`);
      console.log(`first last name: ${first_last_name}`);
      console.log(`email: ${email}`);
      console.log(`Password: ${password}`);
      console.log(`retype password: ${retypePassword}`);
      console.log(`photo: ${photo}`);

      // aca empieza el metodo para recoger los datos que van a node
      this.registerUser(
        // this.myForm.get('id_user').value,
        this.myForm.get('name').value, 
        this.myForm.get('first_last_name').value, 
        this.myForm.get('email').value, 
        this.myForm.get('password').value, 
        this.myForm.get('retypePassword').value,
        this.myForm.get('photo').value
        );
    }


    registerUser(name:string, first_last_name:string, email:string, password:string, retypePassword:string, photo:string,) {

        let user = new User (
          0,
          name,
          first_last_name,
          email,
          password, 
          photo
          
        ) 
        console.log(user)
        if(password === retypePassword)     {
        this.userService.register(user).subscribe((data:any) => {
            console.log("Thank you for registering and welcome to this community");
            this.router.navigateByUrl('/login');
          }) 
        } else {
            console.log("Password are different. Please write the same passoword twice :)")
          
        } 
    }

}

