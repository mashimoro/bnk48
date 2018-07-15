import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramMemberComponent } from './instagram-member.component';

describe('InstagramMemberComponent', () => {
  let component: InstagramMemberComponent;
  let fixture: ComponentFixture<InstagramMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
