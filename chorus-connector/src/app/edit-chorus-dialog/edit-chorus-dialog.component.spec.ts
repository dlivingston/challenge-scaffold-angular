import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChorusDialogComponent } from './edit-chorus-dialog.component';

describe('EditChorusDialogComponent', () => {
  let component: EditChorusDialogComponent;
  let fixture: ComponentFixture<EditChorusDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditChorusDialogComponent]
    });
    fixture = TestBed.createComponent(EditChorusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
