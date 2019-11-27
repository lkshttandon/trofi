import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClientService, Cook } from '../service/http-client.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cook: Cook = new Cook("", "", "", "", "", "", "", "","","");
  foodie: String[]
  caterer: String[]
  ngo: String[]

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
  }
  createCook(): void {
    this.httpClientService.createCook(this.cook)
      .subscribe(data => {
        alert("Cook added successfully.");
      });
  }
  
  onSubmit(form: NgForm) {

    if (form.controls['recom'].value == 'Foodie') {
      
      this.router.navigateByUrl('/homeCook');
    }
    else if (form.controls['recom'].value == 'Cook') {
      // this.cook.cookid =String(Number(this.cook.cookid)+1);
      this.cook.cooklocation = this.cook.cookcity
      this.createCook();
      this.router.navigateByUrl('/homeCook');
    }
    else if (form.controls['recom'].value == 'Caterer') {
      this.router.navigateByUrl('/login');
    }
    else if (form.controls['recom'].value == 'NGO/Charity') {
      this.router.navigateByUrl('/login');
    }

  }
  
}
