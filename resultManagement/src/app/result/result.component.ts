import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ResultDataService } from '../result-data.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
  name: any
  rollnumber: any
  score: any
  dob: any
  constructor(private router: ActivatedRoute, private resultService: ResultDataService) { }
  ngOnInit(): void {
    // in this we are trying to get the result of a student with its id
    this.resultService.getCurrentData(this.router.snapshot.params['id']).pipe(
      catchError((error) => {
        return throwError(() => new Error('Something went wrong. Please try again later.')); // Return a new observable with the error message
      })
    ).subscribe((result) => {
      this.dob = result['dateOfBirth']
      this.score = result['score']
      this.name = result['name']
      this.rollnumber = result['rollNumber']
      console.warn("result from result", result)
    }),console.error();
  }

}
