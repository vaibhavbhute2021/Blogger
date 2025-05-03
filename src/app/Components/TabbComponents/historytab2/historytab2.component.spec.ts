import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Historytab2Component } from './historytab2.component';

describe('Historytab2Component', () => {
  let component: Historytab2Component;
  let fixture: ComponentFixture<Historytab2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Historytab2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Historytab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
