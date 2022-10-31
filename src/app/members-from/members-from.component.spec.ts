import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersFromComponent } from './members-from.component';

describe('MembersFromComponent', () => {
  let component: MembersFromComponent;
  let fixture: ComponentFixture<MembersFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
