import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChecklistPage } from './manage-checklist.page';

describe('ManageChecklistPage', () => {
  let component: ManageChecklistPage;
  let fixture: ComponentFixture<ManageChecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageChecklistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
