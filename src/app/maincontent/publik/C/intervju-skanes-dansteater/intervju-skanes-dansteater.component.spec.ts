import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervjuSkanesDansteaterComponent } from './intervju-skanes-dansteater.component';

describe('IntervjuSkanesDansteaterComponent', () => {
  let component: IntervjuSkanesDansteaterComponent;
  let fixture: ComponentFixture<IntervjuSkanesDansteaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervjuSkanesDansteaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervjuSkanesDansteaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
