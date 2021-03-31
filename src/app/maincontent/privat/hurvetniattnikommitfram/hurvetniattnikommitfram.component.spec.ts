import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurvetniattnikommitframComponent } from './hurvetniattnikommitfram.component';

describe('HurvetniattnikommitframComponent', () => {
  let component: HurvetniattnikommitframComponent;
  let fixture: ComponentFixture<HurvetniattnikommitframComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HurvetniattnikommitframComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HurvetniattnikommitframComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
