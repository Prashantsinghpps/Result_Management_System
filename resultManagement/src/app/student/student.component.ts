import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultDataService } from '../result-data.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  Id: any
  public loginForm!: FormGroup
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router, private resultService: ResultDataService) { }
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      rollNumber: [''],
      dateOfBirth: ['']
    })
  }


  //this method gets the credentials of the student and returns the result of that particular student.
  login() {
    this.resultService.getAll().pipe(
      catchError((error) => {
        return throwError(() => new Error('Something went wrong. Please try again later.')); // Return a new observable with the error message
      })
    ).subscribe((result) => {
      const user = result.find((a: any) => {
        return a.rollNumber === this.loginForm.value.rollNumber && a.dateOfBirth == this.loginForm.value.dateOfBirth;
      });

      if (user) {
        this.loginForm.reset();
        console.warn('this is user id', user.id);
        this.router.navigate([`result/${user.id}`]);
      } else {
        this.loginForm.reset();
        alert('Please Enter Valid Credentials !!');
      }
    });
  }


  //this method clears the form
  clearForm() {
    this.loginForm.reset()
  }

}

