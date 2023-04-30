import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConducteurItemComponent } from './conducteur-item.component';

describe('ConducteurItemComponent', () => {
  let component: ConducteurItemComponent;
  let fixture: ComponentFixture<ConducteurItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConducteurItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConducteurItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
