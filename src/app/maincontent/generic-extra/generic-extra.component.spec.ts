import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericExtraComponent } from './generic-extra.component';

describe('GenericExtraComponent', () => {
  let component: GenericExtraComponent;
  let fixture: ComponentFixture<GenericExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
