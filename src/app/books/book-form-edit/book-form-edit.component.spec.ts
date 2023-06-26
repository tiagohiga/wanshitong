import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormEditComponent } from './book-form-edit.component';

describe('BookFormEditComponent', () => {
  let component: BookFormEditComponent;
  let fixture: ComponentFixture<BookFormEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookFormEditComponent]
    });
    fixture = TestBed.createComponent(BookFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
