import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSpineComponent } from './c-spine.component';

describe('CSpineComponent', () => {
  let component: CSpineComponent;
  let fixture: ComponentFixture<CSpineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSpineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSpineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
