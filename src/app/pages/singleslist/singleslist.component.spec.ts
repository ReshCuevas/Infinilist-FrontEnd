import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleslistComponent } from './singleslist.component';

describe('SingleslistComponent', () => {
  let component: SingleslistComponent;
  let fixture: ComponentFixture<SingleslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
