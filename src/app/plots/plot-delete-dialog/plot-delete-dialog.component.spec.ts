import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotDeleteDialogComponent } from './plot-delete-dialog.component';

describe('PlotDeleteDialogComponent', () => {
  let component: PlotDeleteDialogComponent;
  let fixture: ComponentFixture<PlotDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
