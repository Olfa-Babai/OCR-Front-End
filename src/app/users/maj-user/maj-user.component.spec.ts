import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajUserComponent } from './maj-user.component';

describe('MajUserComponent', () => {
  let component: MajUserComponent;
  let fixture: ComponentFixture<MajUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
