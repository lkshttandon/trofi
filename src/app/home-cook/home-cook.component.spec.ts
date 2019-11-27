import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCookComponent } from './home-cook.component';

describe('HomeCookComponent', () => {
  let component: HomeCookComponent;
  let fixture: ComponentFixture<HomeCookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
