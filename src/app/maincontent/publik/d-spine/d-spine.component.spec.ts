import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSpineComponent } from './d-spine.component';

describe('DSpineComponent', () => {
  let component: DSpineComponent;
  let fixture: ComponentFixture<DSpineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSpineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DSpineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
