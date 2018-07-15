import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbnkComponent } from './editbnk.component';

describe('EditbnkComponent', () => {
  let component: EditbnkComponent;
  let fixture: ComponentFixture<EditbnkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbnkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbnkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
