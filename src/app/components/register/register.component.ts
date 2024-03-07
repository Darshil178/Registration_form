import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  dataService: any;
  details: any[] = [];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  repeatPass: string = 'none';
  registerForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    gender: new FormControl('', Validators.required),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
    rpwd: new FormControl(''),
  });

  viewDetails() {
    this.authService.getDetails().subscribe((response: any) => {
      this.details = response;
    });
  }
  registerSubmitted() {
    if (this.PwD.value === this.RPwD.value) {
      console.log('submitted');
      this.authService.createUser(this.registerForm.value).subscribe(
        () => {
          console.log('User Created Successfully');
          this.registerForm.reset();
        },
        (error) => {
          // console.error('Error creating user:', error);
        }
      );
    } else {
      this.repeatPass = 'inline';
    }
    console.log(this.registerForm.get('firstname'));
  }
  get FirstName() {
    return this.registerForm.get('firstname') as FormControl;
  }
  get LastName() {
    return this.registerForm.get('lastname') as FormControl;
  }
  get Email() {
    return this.registerForm.get('email') as FormControl;
  }
  get Mobile() {
    return this.registerForm.get('mobile') as FormControl;
  }
  get Gender() {
    return this.registerForm.get('gender') as FormControl;
  }
  get PwD() {
    return this.registerForm.get('pwd') as FormControl;
  }
  get RPwD() {
    return this.registerForm.get('rpwd') as FormControl;
  }
}
