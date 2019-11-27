import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Cook{
  constructor(
    public cookid:string,
    public cookusername:string,
	  public cookname:string,
	  public cooklocation:string,
	  public cookpassword:string,
	  public cookphone:string,
	  public cookaddress:string,
	  public cookcity:string,
    public cookzip:string,
    public cookemail:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) {
   }
   getCooks()
  {
    console.log("test call");
    return this.httpClient.get<Cook[]>('http://localhost:5200/cook');
  }
  public deleteCook(cook) {
    return this.httpClient.delete<Cook>("http://localhost:5200/cook" + "/"+ cook.cookid);
  }

  public createCook(cook) {
    return this.httpClient.post<Cook>("http://localhost:5200/cook",cook);
}
}
