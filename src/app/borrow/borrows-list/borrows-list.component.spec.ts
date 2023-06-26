import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowsListComponent } from './borrows-list.component';

describe('BorrowsListComponent', () => {
  let component: BorrowsListComponent;
  let fixture: ComponentFixture<BorrowsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowsListComponent]
    });
    fixture = TestBed.createComponent(BorrowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
