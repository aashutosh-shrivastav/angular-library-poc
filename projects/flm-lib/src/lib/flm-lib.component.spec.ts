import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlmLibComponent } from './flm-lib.component';

describe('FlmLibComponent', () => {
  let component: FlmLibComponent;
  let fixture: ComponentFixture<FlmLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlmLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlmLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
