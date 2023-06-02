import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public myForm : FormGroup;

  constructor( private formBuilder: FormBuilder) {

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
      }
  }


