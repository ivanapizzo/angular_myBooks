import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public myForm : FormGroup;


  // constructor(public userService: UserService, private router:Router, private formBuilder: FormBuilder){

  //   this.userService.user.subscribe((data:User) =>{
  //     this.user = data;
  //     console.log(data) 
  //   }
  //   )
  // }

  constructor(private formBuilder: FormBuilder, public userService: UserService, private router:Router ) {

    this.buildForm();
  }

    private buildForm() {

      const minPassLenght = 8;

      this.myForm = this.formBuilder.group({

        'email': [, [Validators.required, Validators.email]],
        'password': [, [Validators.required, Validators.minLength(minPassLenght)]],


      })
      }

      ngOnInit(): void{

      }

      onSubmit() {  
        console.log('Email:', this.myForm.get('email').value);
        console.log('Password:', this.myForm.get('password').value);


        this.logIn(this.myForm.get('email').value, this.myForm.get('password').value);
      }

//iniciar sesión

      logIn(email:string, password:string):void {

        let user = new User (0, "", "", email, password, "",);
        console.log(user)
          this.userService.login(user).subscribe((data:any)=> {
            if (data != true) {
              this.userService.logueado = true;
              this.userService.user = data[0];
              this.router.navigateByUrl('/booksPage');
            } else {
              console.log("User login error")
            }            
          })
        }

  }


