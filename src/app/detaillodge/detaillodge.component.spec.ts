import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillodgeComponent } from './detaillodge.component';

describe('DetaillodgeComponent', () => {
  let component: DetaillodgeComponent;
  let fixture: ComponentFixture<DetaillodgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillodgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaillodgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
