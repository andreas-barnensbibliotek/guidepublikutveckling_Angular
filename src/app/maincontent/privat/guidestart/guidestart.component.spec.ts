import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidestartComponent } from './guidestart.component';

describe('GuidestartComponent', () => {
  let component: GuidestartComponent;
  let fixture: ComponentFixture<GuidestartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidestartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
