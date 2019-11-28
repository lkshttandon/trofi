import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCookComponent } from './add-cook.component';

describe('AddCookComponent', () => {
  let component: AddCookComponent;
  let fixture: ComponentFixture<AddCookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
