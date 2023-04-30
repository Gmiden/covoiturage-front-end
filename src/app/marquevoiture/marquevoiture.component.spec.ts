import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarquevoitureComponent } from './marquevoiture.component';

describe('MarquevoitureComponent', () => {
  let component: MarquevoitureComponent;
  let fixture: ComponentFixture<MarquevoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarquevoitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarquevoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
