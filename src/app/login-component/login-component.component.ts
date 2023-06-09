import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  username: string='';
  password: string='';
  error : boolean=false;
  login() {
    // Perform the user and password checks here

    if (this.username === 'admin' && this.password === 'root') {
      this.router.navigate(['/home']);
    } else {
      this.error=true;
    }
  }

}
