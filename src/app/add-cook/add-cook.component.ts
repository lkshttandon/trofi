import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService, Cook, Foodselect } from '../service/http-client.service';

@Component({
  selector: 'app-add-cook',
  templateUrl: './add-cook.component.html',
  styleUrls: ['./add-cook.component.css']
})
export class AddCookComponent implements OnInit {
  foodselect:Foodselect = new Foodselect("","","","")
  cook: Cook = new Cook("", "", "", "", "", "", "", "", "", "", []);
  

  // foodname: Cook['foodSelct']
  constructor(private route: ActivatedRoute, private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.cook.cookname = this.route.snapshot.paramMap.get("cookname")
  }
  
  updateFood(): void {
    console.log(this.foodselect.foodid,this.foodselect.foodname,this.foodselect.foodquant)
    this.cook.cookfoods.push(this.foodselect)
    // this.cook.cookfoods['foodid'] = this.foodselect.foodid
    // this.cook.cookfoods['foodname'] = this.foodselect.foodname
    // this.cook.cookfoods['foodprice'] = this.foodselect.foodprice
    // this.cook.cookfoods['foodquant'] = this.foodselect.foodquant
    // console.log(this.cook.cookfoods['foodid'],this.cook.cookfoods['foodname'])
    console.log(this.cook)
    this.httpClientService.updateFood(this.cook)
      .subscribe(data => {
        alert("Food added successfully.");
      });
      this.cook.cookfoods.pop();
  }

}
