import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarvillninaComponent } from './varvillnina.component';

describe('VarvillninaComponent', () => {
  let component: VarvillninaComponent;
  let fixture: ComponentFixture<VarvillninaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarvillninaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarvillninaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
