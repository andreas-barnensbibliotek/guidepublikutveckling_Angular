import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervjuHeatherComponent } from './intervju-heather.component';

describe('IntervjuHeatherComponent', () => {
  let component: IntervjuHeatherComponent;
  let fixture: ComponentFixture<IntervjuHeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervjuHeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervjuHeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
