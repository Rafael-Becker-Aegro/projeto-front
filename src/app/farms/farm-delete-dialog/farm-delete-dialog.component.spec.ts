import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmDeleteDialogComponent } from './farm-delete-dialog.component';

describe('FarmDeleteDialogComponent', () => {
  let component: FarmDeleteDialogComponent;
  let fixture: ComponentFixture<FarmDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
