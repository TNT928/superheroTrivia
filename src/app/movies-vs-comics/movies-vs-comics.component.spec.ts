import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesVsComicsComponent } from './movies-vs-comics.component';

describe('MoviesVsComicsComponent', () => {
  let component: MoviesVsComicsComponent;
  let fixture: ComponentFixture<MoviesVsComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesVsComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesVsComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
