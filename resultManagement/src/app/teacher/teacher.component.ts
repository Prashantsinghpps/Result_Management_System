import { Component, OnInit } from '@angular/core';
import {ResultDataService} from '../result-data.service'
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
constructor(private resto:ResultDataService){}
collection:any=[]
ngOnInit(): void {

  // to get all students present on json server.
  this.resto.getList().subscribe((result)=>{
    console.warn(result)
    this.collection=result
  })
}



// to delete the record of a student by its id
deletedata(id)
{
  this.collection.splice(id-1,id) //this is used
  this.resto.deleteData(id).subscribe((result)=>{   
  })
}

}
