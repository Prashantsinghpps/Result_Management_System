import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AddRecordComponent } from './add-record/add-record.component';
import{HttpClientModule} from '@angular/common/http'
import{ReactiveFormsModule} from '@angular/forms';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { UpdateComponent } from './update/update.component';
import { ResultComponent } from './result/result.component'
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TeacherComponent,
    StudentComponent,
    AddRecordComponent,
    BootstrapComponent,
    UpdateComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
