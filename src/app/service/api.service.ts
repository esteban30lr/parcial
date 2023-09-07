import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public api:HttpClient) {   }
  Url="https://localhost:7027/api/"
  
  public async GetData (endpoint: String){
    await this.api.get(this.Url+endpoint).toPromise().then((res =>{
      console.log(res);
    }))
  }
}
