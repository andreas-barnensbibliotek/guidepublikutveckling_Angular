import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarforgoradetComponent } from './varforgoradet.component';

describe('VarforgoradetComponent', () => {
  let component: VarforgoradetComponent;
  let fixture: ComponentFixture<VarforgoradetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarforgoradetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarforgoradetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
