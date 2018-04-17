import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumepageComponent } from './resumepage.component';

describe('ResumepageComponent', () => {
  let component: ResumepageComponent;
  let fixture: ComponentFixture<ResumepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
