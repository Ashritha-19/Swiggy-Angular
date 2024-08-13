import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
   styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (savedUser && savedUser.email === this.email && savedUser.password === this.password) {
      this.router.navigate(['/home']);
    } else {
      this.loginError = 'Invalid credentials or account does not exist.';
    }
  }
}
