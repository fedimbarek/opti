import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Planning1Component } from './planning1.component';

describe('Planning1Component', () => {
  let component: Planning1Component;
  let fixture: ComponentFixture<Planning1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Planning1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Planning1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
