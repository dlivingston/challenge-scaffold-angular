import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ChorusesService } from "../choruses.service";
import { EditChorusDialogComponent } from "../edit-chorus-dialog/edit-chorus-dialog.component";

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  choruses: any[] = [];

  constructor(
    private router: Router,
    private chorusesService: ChorusesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('CCisAuthenticated')) {
      this.router.navigate(['login']);
    }

    this.chorusesService.getChoruses().subscribe((data) => {
      this.choruses = data;
    });
  }

  addChorus(): void {
    const dialogRef = this.dialog.open(EditChorusDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.choruses.push(result);
      }
    });
  }

  editChorus(chorus: any): void {
    const dialogRef = this.dialog.open(EditChorusDialogComponent, {
      width: '350px',
      data: chorus
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.choruses.findIndex(c => c === chorus);
        if (index !== -1) {
          this.choruses[index] = result;
        }
      }
    });
  }

  deleteChorus(chorus: any): void {
    const index = this.choruses.findIndex(c => c === chorus);
    if (index !== -1) {
      this.choruses.splice(index, 1);
    }
  }

}
