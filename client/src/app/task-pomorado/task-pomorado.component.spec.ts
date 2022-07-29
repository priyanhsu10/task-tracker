import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPomoradoComponent } from './task-pomorado.component';

describe('TaskPomoradoComponent', () => {
  let component: TaskPomoradoComponent;
  let fixture: ComponentFixture<TaskPomoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskPomoradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPomoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
