import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionDeleteDialogComponent } from './production-delete-dialog.component';

describe('ProductionDeleteDialogComponent', () => {
  let component: ProductionDeleteDialogComponent;
  let fixture: ComponentFixture<ProductionDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
