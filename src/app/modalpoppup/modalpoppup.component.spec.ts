import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalpoppupComponent } from './modalpoppup.component';

describe('ModalpoppupComponent', () => {
  let component: ModalpoppupComponent;
  let fixture: ComponentFixture<ModalpoppupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalpoppupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalpoppupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
