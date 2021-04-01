import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurvalkannerdudinpublikComponent } from './hurvalkannerdudinpublik.component';

describe('HurvalkannerdudinpublikComponent', () => {
  let component: HurvalkannerdudinpublikComponent;
  let fixture: ComponentFixture<HurvalkannerdudinpublikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HurvalkannerdudinpublikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HurvalkannerdudinpublikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
