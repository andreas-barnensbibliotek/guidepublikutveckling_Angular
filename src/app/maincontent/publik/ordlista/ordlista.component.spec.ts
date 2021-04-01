import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdlistaComponent } from './ordlista.component';

describe('OrdlistaComponent', () => {
  let component: OrdlistaComponent;
  let fixture: ComponentFixture<OrdlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdlistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
