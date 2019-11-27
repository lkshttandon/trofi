import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    public cookemail: string
  ) { }
}
export class Caterer {
  constructor(
    public catererid: string,
    public caterername: string,
    public catererlocation: string,
    public catererpassword: string,
    public catererphone: string,
    public catereraddress: string,
    public caterercity: string,
    public catererzip: string,
    public catereremail: string
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

  public createCook(cook) {
    console.log("create call");
    return this.httpClient.post<Cook>("http://localhost:5200/cook", cook);
  }
  getCaterer() {
    console.log("catrer test call");
    return this.httpClient.get<Caterer[]>('http://localhost:5300/catrer');
  }
  public deleteCaterer(caterer) {
    return this.httpClient.delete<Caterer>("http://localhost:5300/catrer" + "/" + caterer.catererid);
  }

  public createCaterer(caterer) {
    console.log("create call");
    return this.httpClient.post<Caterer>("http://localhost:5300/catrer", caterer);
  }
  getFoodie() {
    console.log("Foodie test call");
    return this.httpClient.get<Foodie[]>('http://localhost:5400/foodie');
  }
  public deleteFoodie(foodie) {
    return this.httpClient.delete<Caterer>("http://localhost:5400/foodie" + "/" + foodie.foodieId);
  }

  public createFoodie(foodie) {
    console.log("create call");
    return this.httpClient.post<Caterer>("http://localhost:5400/foodie", foodie);
  }
}
