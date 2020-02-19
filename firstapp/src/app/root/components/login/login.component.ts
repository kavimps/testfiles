import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { HttpService } from 'src/app/root/service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    mobile: new FormControl(),
    password: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder, private route: Router) {

  }

  ngOnInit(): void {

    this.createForm();

  }

   // create a reactive login form
   createForm() {
    this.loginForm = this.formBuilder.group({
      mobile: ['', [
        Validators.required,
        Validators.minLength(10)]],
      password: ['', [
        Validators.required,
        Validators.minLength(2)]]
    });
  }

   // gets login form controls
   get loginControl() { return this.loginForm.controls; }

   // checks whether the user is authorized
   public login(): void {
    console.log('loginFrom', this.loginForm.value);
    // this.http.postRequest('users/login', this.loginForm.value).subscribe((data) => {
    //   localStorage.setItem('doctorid', data.doctorId);
    //   this.route.navigate(['/doctorsview']);
    // });
  }

}
