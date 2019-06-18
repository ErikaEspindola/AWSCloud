import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private _usersService: UsersService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      access: ['', Validators.required],
      secret: ['', Validators.required]
    });
  }

  public entrarComChavesAcesso() {
    if(this.loginForm.valid) {
      sessionStorage.setItem('a', btoa(this.loginForm.get('access').value));
      sessionStorage.setItem('b', btoa(this.loginForm.get('secret').value));
      this.router.navigate(['/pagina-instancias'])
    } else {
      this.loginForm.markAsTouched();
    }
  }
}
