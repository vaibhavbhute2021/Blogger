import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techtab1Component } from './techtab1.component';

describe('Techtab1Component', () => {
  let component: Techtab1Component;
  let fixture: ComponentFixture<Techtab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Techtab1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Techtab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
