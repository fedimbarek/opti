import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Destination1Component } from './destination1.component';

describe('Destination1Component', () => {
  let component: Destination1Component;
  let fixture: ComponentFixture<Destination1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Destination1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Destination1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
