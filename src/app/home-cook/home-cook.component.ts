import { Component, OnInit } from '@angular/core';
import { Cook } from '../service/http-client.service'
import { HttpClientService } from '../service/http-client.service';
import { ActivatedRoute } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-cook',
  templateUrl: './home-cook.component.html',
  styleUrls: ['./home-cook.component.css']
})
export class HomeCookComponent implements OnInit {
  
  username:string;

  constructor(private httpClientService: HttpClientService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get("foodiename")
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
