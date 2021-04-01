import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VardetvartdetComponent } from './vardetvartdet.component';

describe('VardetvartdetComponent', () => {
  let component: VardetvartdetComponent;
  let fixture: ComponentFixture<VardetvartdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VardetvartdetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VardetvartdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
