import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotDialogComponent } from './plot-dialog.component';

describe('PlotDialogComponent', () => {
  let component: PlotDialogComponent;
  let fixture: ComponentFixture<PlotDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
