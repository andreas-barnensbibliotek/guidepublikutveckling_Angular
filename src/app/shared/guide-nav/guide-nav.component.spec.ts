import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideNavComponent } from './guide-nav.component';

describe('GuideNavComponent', () => {
  let component: GuideNavComponent;
  let fixture: ComponentFixture<GuideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
