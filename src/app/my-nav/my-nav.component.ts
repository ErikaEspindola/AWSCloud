import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent {
  constructor(private router: Router) { }

  public redirecionarLogin() {
    this.router.navigate(['/login']);
  }
}
