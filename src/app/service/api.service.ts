import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public api:HttpClient) {   }
  Url="https://localhost:7090/api/"
  
  public async GetData (endpoint: String){
    var response;
    await this.api.get(this.Url+endpoint).toPromise().then((res =>{
      response = res;
    }))
    return response;
  }

  public async PostData (endpoint: String, body: any){
    var response;
    await this.api.post(this.Url+endpoint, body).toPromise().then((res =>{
      response = res;
    }))
    return response
  }
}
