import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '../../../../node_modules/@types/selenium-webdriver/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        login: '',
        password: '',
      }
    );
  }
  login() {
    console.log('login ', this.loginForm.value);
    // this.http.post(`${environment.api_url}/auth/login`, this.loginForm.value).subscribe(data => console.log(data));
   this.auth.authen(this.loginForm.value).subscribe(obj =>  console.log(obj ));
  }

}
