import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilketarnastastegComponent } from './vilketarnastasteg.component';

describe('VilketarnastastegComponent', () => {
  let component: VilketarnastastegComponent;
  let fixture: ComponentFixture<VilketarnastastegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VilketarnastastegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VilketarnastastegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
