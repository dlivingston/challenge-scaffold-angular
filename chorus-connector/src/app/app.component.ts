import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chorus-connector';
  isLoggedIn!: boolean;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('CCisAuthenticated') ? true : false;
  }

  logout(): void {
    localStorage.removeItem('CCisAuthenticated');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

}
