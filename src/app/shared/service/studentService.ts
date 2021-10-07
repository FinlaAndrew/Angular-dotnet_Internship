import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
   providedIn: 'root',
   
 })
export class StudentService {
 
   constructor(private httpClient: HttpClient) { }
   //baseURL = "https://localhost:5001/";

    saveData(data :any) {
      console.log("data",data);
        return this.httpClient.post(environment.url + 'student/save', data);
      // return this.httpClient.post(this.baseURL + 'api/student/save', data);
      }
     
     
     viewData(){  
      return this.httpClient.get(environment.url +'student/getData');  
      }  
  
      deleteStudent(id : string)
      {
      
        return this.httpClient.delete(environment.url + 'student/deletestudent/' + id);
        
      }
}