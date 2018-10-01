import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http : HttpClient) { }

  readData():Observable<any>{
    console.log("Read Data");
    return this.http.get('http://localhost:1234/rest/api/read')
  }

  postData(ename:string,eage:number):Observable<object>{
      return this.http.post('http://localhost:1234/rest/api/write',{
        name:ename,
        age:eage
      });
  }

deleteData(ename:string,eage:number):Observable<object>{
      return this.http.post('http://localhost:1234/rest/api/remove',{
        name:ename,
        age:eage
      });
  }
updateData(ename:string,eage:number,ewhat:string):Observable<object>{
      return this.http.post('http://localhost:1234/rest/api/update',{
       val:{ name:ename,
              age:eage },
       ref:{ name:ewhat}
      });

      
  }

  FindData(ename:string):Observable<object>{
    return this.http.get(`http://localhost:1234/rest/api/find/${ename}`,{
   
    })

  }

  getData():Observable<any>{
    console.log("GET data in serviece");
    return this.http.get('http://localhost:1234/rest/api/read');
  }

  
}
