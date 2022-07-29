import { Component, OnInit } from '@angular/core';
import { TaskDto } from '../serviceproxy';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  public task: TaskDto = new TaskDto();

  constructor() {}

  ngOnInit(): void {}
}
