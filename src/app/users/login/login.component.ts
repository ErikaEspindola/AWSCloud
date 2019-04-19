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
      this._usersService.setKeys(this.loginForm.get('access').value, this.loginForm.get('secret').value)
      .subscribe(
        () => this.router.navigate(['/pagina-instancias']),
        (error) => console.log(error)
      );
    } else {
      this.loginForm.markAsTouched();
    }
  }
}
