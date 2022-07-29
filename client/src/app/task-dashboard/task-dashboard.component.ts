import { Component, OnInit } from '@angular/core';
import { STATUS, TaskDto } from '../serviceproxy';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css'],
})
export class TaskDashboardComponent implements OnInit {
  public todo: TaskDto[] = [];
  public inprogress: TaskDto[] = [];
  public done: TaskDto[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTaskData().then((r: TaskDto[]) => {
      this.todo = r.filter((x) => x.status === STATUS._0);
      this.inprogress = r.filter((x) => x.status === STATUS._1);
      this.done = r.filter((x) => x.status === STATUS._2);
    });
  }
  public drop(data: any) {
    console.log('drop here', data);
  }
  public onAdd(data: any) {
    console.log('add press');
  }
}
