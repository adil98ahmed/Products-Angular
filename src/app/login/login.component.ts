import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  email: any;
  password: any;
  username: any;
  user: any;
  wrongEmail: boolean = false;
  wrongPass: boolean = false;
  wrongUserName: boolean = false;
  passwordType:string="password";
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    
    this.login = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z]{4,6}[0-9]{0,4}[a-z]{0,4}$'),
        ],
      ],
      email: [
        '',
        [Validators.pattern('[a-z]{3,}[0-9]{0,4}@[a-z]{3,8}.[a-z]{3}$')],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z-0-9_@./#&+-]{8,}')],
      ],
    });
  }
  onSubmit() {
    if (this.login.status == 'VALID') {
      this.router.navigateByUrl('home');
    }

  }
  showHidePassword(){
    if(this.passwordType=="password"){
      this.passwordType="text";
    }
    else{
      this.passwordType="password"
    }
  }
  ngAfterViewInit(): void{
  
    this.http.get('https://fakestoreapi.com/users/1').subscribe(data=>{
      this.username=data['username'];
      this.email = data['email'];
      this.password = data['password']
    })
    }
  
}
