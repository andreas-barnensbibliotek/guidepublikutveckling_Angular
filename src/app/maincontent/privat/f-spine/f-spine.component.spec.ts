import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSpineComponent } from './f-spine.component';

describe('FSpineComponent', () => {
  let component: FSpineComponent;
  let fixture: ComponentFixture<FSpineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FSpineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FSpineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
