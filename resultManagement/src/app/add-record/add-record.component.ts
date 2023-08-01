import { Component } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms'
import { ResultDataService } from '../result-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent {
addrecord=new FormGroup({
  rollNumber:new FormControl(''),
name:new FormControl(''),
dateOfBirth:new FormControl(''),
score:new FormControl('')
})
alert:boolean=false
constructor (private resultdataservice:ResultDataService, private router:Router){}


//this method daveData method which is derived in resultServices.
collectRecord()
{
  this.resultdataservice.saveData(this.addrecord.value).subscribe((result)=>{
    this.alert=true
    this.addrecord.reset({})
    this.router.navigate(['/teacher'])

  }),console.error();
}



//this method closes the alert
closeAlert()
{
  this.alert=false
}



//this method clears the form
clearForm()
{
  this.addrecord.reset()
}
}
