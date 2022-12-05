import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddToListComponent } from './modal-add-to-list.component';

describe('ModalAddToListComponent', () => {
  let component: ModalAddToListComponent;
  let fixture: ComponentFixture<ModalAddToListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddToListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
