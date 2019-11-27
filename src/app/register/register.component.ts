import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClientService, Cook, Caterer, Foodie } from '../service/http-client.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cook: Cook = new Cook("", "", "", "", "", "", "", "","","");
  caterer: Caterer = new Caterer("","","","","","","","","");
  foodie: Foodie = new Foodie("","","","","","","","")
  ngo: String[]

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
  }
  createCaterer():void{
    this.httpClientService.createCaterer(this.caterer)
      .subscribe(data => {
        alert("Caterer added successfully.");
      });
  }
  createCook(): void {
    this.httpClientService.createCook(this.cook)
      .subscribe(data => {
        alert("Cook added successfully.");
      });
  }
  createFoodie(): void {
    this.httpClientService.createCook(this.cook)
      .subscribe(data => {
        alert("Foodie added successfully.");
      });
  }
  onSubmit(form: NgForm) {

    if (form.controls['recom'].value == 'Foodie') {
      this.createFoodie();
      this.router.navigateByUrl('/homeCook');
    }
    else if (form.controls['recom'].value == 'Cook') {
      // this.cook.cookid =String(Number(this.cook.cookid)+1);
      this.cook.cooklocation = this.cook.cookcity
      this.createCook();
      this.router.navigateByUrl('/homeCook');
    }
    else if (form.controls['recom'].value == 'Caterer') {
      this.caterer.catererlocation = this.caterer.caterercity
      this.createCaterer();
      this.router.navigateByUrl('/login');
    }
    else if (form.controls['recom'].value == 'NGO/Charity') {
      this.router.navigateByUrl('/login');
    }

  }
  
}
