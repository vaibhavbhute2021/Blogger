import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Healthcaretab3Component } from './healthcaretab3.component';

describe('Healthcaretab3Component', () => {
  let component: Healthcaretab3Component;
  let fixture: ComponentFixture<Healthcaretab3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Healthcaretab3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Healthcaretab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
