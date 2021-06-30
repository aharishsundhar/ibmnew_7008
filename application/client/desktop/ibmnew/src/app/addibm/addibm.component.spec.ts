import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddibmComponent } from './addibm.component';

describe('AddibmComponent', () => {
  let component: AddibmComponent;
  let fixture: ComponentFixture<AddibmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddibmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddibmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});