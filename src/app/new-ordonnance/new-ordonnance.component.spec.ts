import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrdonnanceComponent } from './new-ordonnance.component';

describe('NewOrdonnanceComponent', () => {
  let component: NewOrdonnanceComponent;
  let fixture: ComponentFixture<NewOrdonnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrdonnanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrdonnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
