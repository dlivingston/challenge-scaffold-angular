import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChorusesService } from "../choruses.service";

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  choruses: any[] = [];

  constructor(private router: Router, private chorusesService: ChorusesService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('CCisAuthenticated')) {
      this.router.navigate(['login']);
    }

    this.chorusesService.getChoruses().subscribe((data) => {
      this.choruses = data;
    });
  }

}
