import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionDialogComponent } from './production-dialog.component';

describe('ProductionDialogComponent', () => {
  let component: ProductionDialogComponent;
  let fixture: ComponentFixture<ProductionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
