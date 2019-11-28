import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Foodselect{
  constructor(
  public foodid:string,
	public foodname:string,
  public foodprice:string,
  public foodquant:string
  ){}
}

export class Cook {
  constructor(
    public cookid: string,
    public cookusername: string,
    public cookname: string,
    public cooklocation: string,
    public cookpassword: string,
    public cookphone: string,
    public cookaddress: string,
    public cookcity: string,
    public cookzip: string,
    public cookemail: string,
    public cookfoods:Foodselect[],//cook.foodSelect[0].get('foodid')
    // public cookfoodid:Foodselect['foodid'],
    // public cookfoodname:Foodselect['foodname'],
    // public cookfoodtype:Foodselect['foodtype']
    
  ) { }
}

export class Foodie {
  constructor(
    public foodieId: string,
    public foodieName: string,
    public foodieEmail: string,
    public foodiePassword: string,
    public foodieCity: string,
    public foodieAddress: string,
    public foodiePhone: string,
    public foodieZip: string,

  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }
  getCooks() {
    console.log("test call");
    return this.httpClient.get<Cook[]>('http://localhost:5200/cook');
  }
  public deleteCook(cook) {
    return this.httpClient.delete<Cook>("http://localhost:5200/cook" + "/" + cook.cookid);
  }
  updateFood(cook){
    return this.httpClient.put<Cook>("http://localhost:5200/cook" + "/" + cook.cookname,cook);
  }
  public createCook(cook) {
    console.log("create call");
    return this.httpClient.post<Cook>("http://localhost:5200/cook", cook);
  }
  
  getFoodie() {
    console.log("Foodie test call");
    return this.httpClient.get<Foodie[]>('http://localhost:5400/foodie');
  }
  public deleteFoodie(foodie) {
    return this.httpClient.delete<Foodie>("http://localhost:5400/foodie" + "/" + foodie.foodieId);
  }

  public createFoodie(foodie) {
    console.log("create call");
    return this.httpClient.post<Foodie>("http://localhost:5400/foodie", foodie);
  }
}
