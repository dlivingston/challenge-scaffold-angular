import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-chorus-dialog',
  templateUrl: './edit-chorus-dialog.component.html',
  styleUrls: ['./edit-chorus-dialog.component.scss']
})
export class EditChorusDialogComponent {
  chorusForm!: FormGroup;
  isEditMode!: boolean;

  constructor(
    public dialogRef: MatDialogRef<EditChorusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.isEditMode = !!data;
    this.chorusForm = this.fb.group({
      name: [data?.name || '', Validators.required],
      description: [data?.description || '', Validators.required],
      contactEmail: [data?.contactEmail || '', Validators.required],
      location: this.fb.group({
        city: [data?.location?.city || '', Validators.required],
        state: [data?.location?.state || '', Validators.required]
      })
    });
  }

  save(): void {
    if(this.chorusForm.valid) {
      this.dialogRef.close(this.chorusForm.value);
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}
