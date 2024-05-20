import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlannigComponent } from './detail-plannig.component';

describe('DetailPlannigComponent', () => {
  let component: DetailPlannigComponent;
  let fixture: ComponentFixture<DetailPlannigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPlannigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPlannigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
