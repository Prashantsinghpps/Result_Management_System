import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ResultDataService {
url="http://localhost:3000/restaurant"
  constructor(private http:HttpClient) { }


  //gets all data from server
  getList()
  {
    return this.http.get(this.url)
  }


  //saves the data to json server of student to the server
  saveData(data)
  {
  
    return this.http.post(this.url,data)
  }


  //deleted the data from json server of a student by its id
  deleteData(id)
  {
    return this.http.delete(`${this.url}/${id}`)
  }


  //updates the data to json server of student by its id
  updateData(id,data)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }


  //gets data of from json server student by its id
  getCurrentData(id)
  {
    return this.http.get(`${this.url}/${id}`)
  }


  
  //gets all data from json server
  getAll()
  {
    return this.http.get<any>(`${this.url}`)
  }
}
