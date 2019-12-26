import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsalesComponent } from './productsales.component';

describe('ProductsalesComponent', () => {
  let component: ProductsalesComponent;
  let fixture: ComponentFixture<ProductsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
