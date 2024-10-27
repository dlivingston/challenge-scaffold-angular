import { Component, OnInit } from '@angular/core';
import { ChorusesService } from '../choruses.service';

@Component({
  selector: 'app-public-view',
  templateUrl: './public-view.component.html',
  styleUrls: ['./public-view.component.scss']
})
export class PublicViewComponent implements OnInit {
  choruses: any[] = [];

  constructor(private chorusesService: ChorusesService) { }

  ngOnInit(): void {
    this.chorusesService.getChoruses().subscribe((data) => {
      this.choruses = data;
    });
  }

}
