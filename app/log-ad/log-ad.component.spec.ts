import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAdComponent } from './log-ad.component';

describe('LogAdComponent', () => {
  let component: LogAdComponent;
  let fixture: ComponentFixture<LogAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
