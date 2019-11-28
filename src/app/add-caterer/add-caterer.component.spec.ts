import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatererComponent } from './add-caterer.component';

describe('AddCatererComponent', () => {
  let component: AddCatererComponent;
  let fixture: ComponentFixture<AddCatererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCatererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
