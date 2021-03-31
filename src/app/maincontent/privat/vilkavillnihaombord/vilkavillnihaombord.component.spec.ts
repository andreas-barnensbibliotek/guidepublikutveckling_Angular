import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilkavillnihaombordComponent } from './vilkavillnihaombord.component';

describe('VilkavillnihaombordComponent', () => {
  let component: VilkavillnihaombordComponent;
  let fixture: ComponentFixture<VilkavillnihaombordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VilkavillnihaombordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VilkavillnihaombordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
