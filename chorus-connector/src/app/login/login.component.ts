import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('CCisAuthenticated')) {
      this.router.navigate(['admin']);
    } else {
      this.loginForm = new FormBuilder().group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
  }

  login(): void {
    const formValues = this.loginForm.value;
    this.username = formValues.username;
    this.password = formValues.password
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('CCisAuthenticated', 'true');
      this.router.navigate(['admin']);
    } else {
      alert('Invalid credentials');
    }
  }
}
