import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VemskalockaenmotvilligpublikochhurComponent } from './vemskalockaenmotvilligpublikochhur.component';

describe('VemskalockaenmotvilligpublikochhurComponent', () => {
  let component: VemskalockaenmotvilligpublikochhurComponent;
  let fixture: ComponentFixture<VemskalockaenmotvilligpublikochhurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VemskalockaenmotvilligpublikochhurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VemskalockaenmotvilligpublikochhurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
