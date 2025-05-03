import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciFitab4Component } from './sci-fitab4.component';

describe('SciFitab4Component', () => {
  let component: SciFitab4Component;
  let fixture: ComponentFixture<SciFitab4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SciFitab4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SciFitab4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
