import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcQuestionsComponent } from './dc-questions.component';

describe('DcQuestionsComponent', () => {
  let component: DcQuestionsComponent;
  let fixture: ComponentFixture<DcQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
