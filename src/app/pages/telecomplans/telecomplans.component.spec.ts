import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomplansComponent } from './telecomplans.component';

describe('TelecomplansComponent', () => {
  let component: TelecomplansComponent;
  let fixture: ComponentFixture<TelecomplansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomplansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
