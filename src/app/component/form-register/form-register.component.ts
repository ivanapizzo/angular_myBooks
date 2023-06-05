import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myForm : FormGroup;

  constructor(private formBuilder: FormBuilder){

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
        'name': new FormControl (null, [Validators.required, Validators.minLength(minNameLenght)]), 
        'lastName': new FormControl(null, [Validators.required, Validators.minLength(minNameLenght)]), 
        'email': new FormControl (null, [Validators.required, Validators.email]), 
        // 'url': new FormControl(null, Validators.required), 
        'password': new FormControl(null, [Validators.required, Validators.minLength(minPassLenght)]), 
        'retypePassword': new FormControl(null, [Validators.required, Validators.minLength(minPassLenght)]), 
  
      })
    }
  
    ngOnInit(): void {

    }
  
    onSubmit(){

      let name = this.myForm.get('name').value;
      let lastName = this.myForm.get('lastName').value;
      let email = this.myForm.get('email').value;
      let password = this.myForm.get('password').value;
      let retypePassword = this.myForm.get('retyPassword').value;

      console.log(`name: ${name}, last name: ${lastName}`);
      console.log(`email: ${email}`);
      console.log(`Password: ${password}, verification: ${retypePassword}`);
    }
}

