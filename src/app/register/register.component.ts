import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  registerError: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.email || !this.password) {
      this.registerError = 'All fields are required.';
      return;
    }

    const user = { email: this.email, password: this.password };
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/login']);
  }
}

