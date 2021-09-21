import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrdonnanceComponent } from './show-ordonnance.component';

describe('ShowOrdonnanceComponent', () => {
  let component: ShowOrdonnanceComponent;
  let fixture: ComponentFixture<ShowOrdonnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOrdonnanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrdonnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
