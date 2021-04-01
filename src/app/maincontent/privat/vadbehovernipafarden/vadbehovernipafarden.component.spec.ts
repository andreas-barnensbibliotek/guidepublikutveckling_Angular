import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VadbehovernipafardenComponent } from './vadbehovernipafarden.component';

describe('VadbehovernipafardenComponent', () => {
  let component: VadbehovernipafardenComponent;
  let fixture: ComponentFixture<VadbehovernipafardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VadbehovernipafardenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VadbehovernipafardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
