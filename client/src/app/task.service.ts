import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, CreateTaskDto, TaskDto } from './serviceproxy';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private client: Client;
  constructor() {
    this.client = new Client('https://localhost:7177', window as any);
  }

  public getTaskData(): Promise<TaskDto[]> {
    return this.client.taskAll();
  }
  public addTask(task: CreateTaskDto): Promise<TaskDto> {
    return this.client.taskPOST(task);
  }
  public updateTask(taskId: string, task: TaskDto): Promise<TaskDto> {
    return this.client.taskPUT(taskId, task);
  }
}
