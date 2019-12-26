import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigmasterComponent } from './configmaster.component';

describe('ConfigmasterComponent', () => {
  let component: ConfigmasterComponent;
  let fixture: ComponentFixture<ConfigmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
