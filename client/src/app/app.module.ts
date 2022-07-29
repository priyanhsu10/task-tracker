import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskPomoradoComponent } from './task-pomorado/task-pomorado.component';
import { TimerComponent } from './timer/timer.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TaskComponent } from './task/task.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TaskDashboardComponent,
    CreateTaskComponent,
    TaskPomoradoComponent,
    TimerComponent,
    MenubarComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragAndDropModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
