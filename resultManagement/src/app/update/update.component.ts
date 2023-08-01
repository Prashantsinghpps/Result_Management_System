import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ResultDataService}from '../result-data.service'
import {ActivatedRoute} from '@angular/router'
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editrecord=new FormGroup({
    rollNumber:new FormControl(''),
name:new FormControl(''),
dateOfBirth:new FormControl(''),
score:new FormControl('')
  })
  alert:boolean =false
  constructor (private addrecord:ResultDataService , private router: ActivatedRoute){}
  ngOnInit(): void {

  //  this method gets the data of the student with its id
      this.addrecord.getCurrentData(this.router.snapshot.params['id']).pipe(
        catchError((error)=>{
          return throwError(()=>new error('error in getCurrentdata,update.ts'))
        })
      ).subscribe((result)=>
      {
        //through this we are showing data of student in the respective fields
        this.editrecord=new FormGroup({
      rollNumber:new FormControl(result['rollNumber']),
      name:new FormControl(result['name']),
      dateOfBirth:new FormControl(result['dateOfBirth']),
      score:new FormControl(result['score'])
      })
      })
  }



  //this method upadates the data of student
      updaterecord()
      {
      this.addrecord.updateData(this.router.snapshot.params['id'],this.editrecord.value).subscribe((e)=>{
        this.alert=true;   
       })
    }

    
    //this method closes the alert
    closeAlert(){
      this.alert=false
    }
}


