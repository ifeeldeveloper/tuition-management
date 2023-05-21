import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TeacherComponent } from '../teacher/teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from '../student/student.component';



@NgModule({
  declarations: [
    HomeComponent,
    TeacherComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
