import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarbefinnerniernuComponent } from './varbefinnerniernu.component';

describe('VarbefinnerniernuComponent', () => {
  let component: VarbefinnerniernuComponent;
  let fixture: ComponentFixture<VarbefinnerniernuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarbefinnerniernuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarbefinnerniernuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
