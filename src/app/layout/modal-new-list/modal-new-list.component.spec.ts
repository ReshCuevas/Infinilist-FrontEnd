import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewListComponent } from './modal-new-list.component';

describe('ModalNewListComponent', () => {
  let component: ModalNewListComponent;
  let fixture: ComponentFixture<ModalNewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
