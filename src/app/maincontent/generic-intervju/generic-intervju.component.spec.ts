import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericIntervjuComponent } from './generic-intervju.component';

describe('GenericIntervjuComponent', () => {
  let component: GenericIntervjuComponent;
  let fixture: ComponentFixture<GenericIntervjuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericIntervjuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericIntervjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
