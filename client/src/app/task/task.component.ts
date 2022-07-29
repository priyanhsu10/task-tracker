import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskDto } from '../serviceproxy';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Output()
  public onAdd: EventEmitter<any> = new EventEmitter();
  @Input()
  public data: TaskDto[] = [];
  @Input()
  public header: string = 'test';
  @Input()
  public add: boolean = false;
  constructor() {}
  dragEnd(event: any) {
    console.log('Element was dragged', event);
  }
  public addClick(): void {
    console.log('addClick');

    this.onAdd.emit({ add: true });
  }
  ngOnInit(): void {}
}
