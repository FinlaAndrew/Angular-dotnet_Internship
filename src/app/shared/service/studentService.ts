import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
   providedIn: 'root',
   
 })
export class StudentService {
  
  //baseURL: string;
  // http: any;
   baseURL = 'https://localhost:44311/';
   constructor(private httpClient: HttpClient) { }
  

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

 
saveSubject(id : any,data :any)
{
  console.log("data",id);
  return this.httpClient.post('https://localhost:44311/mark/postsave/'+id,data );
}
EditMark(id:any)
 {
  return this.httpClient.get(this.baseURL + 'mark/geteditMark/' + id);
 }
 UpdateMark(data :any)
 {
  console.log("updatedata",data);
  return this.httpClient.patch(this.baseURL + 'mark/updateMark/', data);
  }
  DeleteMark(id : any,data:any)
 {
  return this.httpClient.post(this.baseURL + 'mark/deleteMark/'+id, data);

 }
getStudent(data:any){
  console.log("321",data);
  return this.httpClient.get(this.baseURL +'mark/getStud/' +data);
}
getSubjects()
  {
    return this.httpClient.get(this.baseURL +'mark/getSub/'); 
  }

 saveCountry(data :any)
 {
   console.log("data",data);
   return this.httpClient.post(this.baseURL + 'country/savecountry', data);

 }

 
 getCountry()
 {
  console.log("456");
  return this.httpClient.get(this.baseURL +'country/getData/'); 

 }

 DeleteCountry(id : string)
 {
  return this.httpClient.delete(this.baseURL + 'country/deletecountry/' + id);

 }
 EditCountry(id:any)
 {
  return this.httpClient.get(this.baseURL + 'country/geteditdata/' + id);
 }


 PatchCountry(id:any,data :any)
 {
  console.log("id",id);
  return this.httpClient.patch(this.baseURL + 'country/updatecountry/'+ id,data);
  }

 SortOrder()
   {
    return this.httpClient.get(this.baseURL + 'country/sortorder');
  }
 Countryreport()
  {
    return this.httpClient.get(this.baseURL +'studentreport/getcountryreport/'); 
  }
  // viewreportdata(data:any)
  // {
  //   return this.httpClient.post(this.baseURL + 'studentreport/countrysview',data);
  // }
  GetStudentReportData(data:any)
  {
    let queryString = '?';
      for (const key in data) {
          if (data.hasOwnProperty(key) && data[key]) {
              queryString += `${key}=${data[key]}&`;
          }
      }
      //return this.http.get(environment.url + 'student/studentStatisticsReport/viewStudentStatistics/' + queryString);
   return this.httpClient.get(this.baseURL +'studentreport/countryview/' + queryString); 
  }

  Subreport()
  {
    return this.httpClient.get(this.baseURL +'sub/subview/'); 
  }


  Subjectreport()
  {
    return this.httpClient.get(this.baseURL +'markentryreport/getstureport/'); 
  }
  GetSubjectReportData(data:any)
  {
    let queryString = '?';
      for (const key in data) {
          if (data.hasOwnProperty(key) && data[key]) {
              queryString += `${key}=${data[key]}&`;
          }
      }
      return this.httpClient.get(this.baseURL +'markentryreport/stuview/' + queryString); 
    }

viewData1(){
   return this.httpClient.get(this.baseURL+'studentdata/getstudent');  

  } 
  // getRepos(): Observable<any> {
  //   return this.httpClient.get('https://localhost:5001/'+'student/get');
  // }

  dataSave(data :any) {
   
    console.log("data",data);
      return this.httpClient.post(this.baseURL+ 'studentdata/save', data);
    // return this.httpClient.post(this.baseURL + 'api/student/save', data);
    } 
    getStudentData(id: any) {
      return this.httpClient.get(this.baseURL+'studentdata/geteditdata/'+id);
    }
    delStudentData(id: any) {
      return this.httpClient.delete(this.baseURL+'studentdata/deletedata/'+id);
    }
    updateStudentdata(id:any,data:any){
      console.log("id",id);
      console.log("data",data);
      return this.httpClient.post(this.baseURL+'studentdata/updatedata/'+id,data);
    }
 

 


 //#end region


 //#regionStudentForm



 //#end region


  //#SortOrder
 

      
}