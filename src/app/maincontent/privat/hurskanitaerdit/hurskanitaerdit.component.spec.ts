import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurskanitaerditComponent } from './hurskanitaerdit.component';

describe('HurskanitaerditComponent', () => {
  let component: HurskanitaerditComponent;
  let fixture: ComponentFixture<HurskanitaerditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HurskanitaerditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HurskanitaerditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
