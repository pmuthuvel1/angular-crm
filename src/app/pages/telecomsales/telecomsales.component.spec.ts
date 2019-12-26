import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomsalesComponent } from './telecomsales.component';

describe('TelecomsalesComponent', () => {
  let component: TelecomsalesComponent;
  let fixture: ComponentFixture<TelecomsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
