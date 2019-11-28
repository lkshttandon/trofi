import { Component, OnInit } from '@angular/core';
import { Cook } from '../service/http-client.service'
import { HttpClientService } from '../service/http-client.service';
// import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-cook',
  templateUrl: './home-cook.component.html',
  styleUrls: ['./home-cook.component.css']
})
export class HomeCookComponent implements OnInit {
  

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    console.log('on ng init...');
    
    this.httpClientService.getCooks().subscribe(

      response => {
        this.handleSuccessfulResponse(response)
        console.log('inside cook...')
      }
    );

    
  }
  handleSuccessfulResponse(response) {
    console.log(response);
  }
 
}