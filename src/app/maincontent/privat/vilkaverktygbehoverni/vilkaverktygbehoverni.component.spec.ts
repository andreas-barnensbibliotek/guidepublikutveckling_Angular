import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilkaverktygbehoverniComponent } from './vilkaverktygbehoverni.component';

describe('VilkaverktygbehoverniComponent', () => {
  let component: VilkaverktygbehoverniComponent;
  let fixture: ComponentFixture<VilkaverktygbehoverniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VilkaverktygbehoverniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VilkaverktygbehoverniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
