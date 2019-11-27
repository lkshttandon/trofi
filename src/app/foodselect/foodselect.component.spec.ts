import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodselectComponent } from './foodselect.component';

describe('FoodselectComponent', () => {
  let component: FoodselectComponent;
  let fixture: ComponentFixture<FoodselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
