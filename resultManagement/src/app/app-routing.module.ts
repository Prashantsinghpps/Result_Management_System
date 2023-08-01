import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentComponent } from './student/student.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { UpdateComponent } from './update/update.component';
import { ResultComponent } from './result/result.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

const routes: Routes = [
  {
    component:HomepageComponent,
    path:''
  },
  {
    component:TeacherComponent,
    path:'teacher'
  },
  {
    component:StudentComponent,
    path:'student'
  },
  {
    component:AddRecordComponent,
    path:'addRecord'
  },
  {
    component:UpdateComponent,
    path:'update/:id'
  },
  {
    component:ResultComponent,
    path:'result/:id'
  },
  {
    component:BootstrapComponent,
    path:'bootstrap'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
