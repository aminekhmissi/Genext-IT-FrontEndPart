import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLodgeComponent } from './add-lodge.component';

describe('AddLodgeComponent', () => {
  let component: AddLodgeComponent;
  let fixture: ComponentFixture<AddLodgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLodgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLodgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
