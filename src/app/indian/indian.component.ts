import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-indian',
  templateUrl: './indian.component.html',
  styleUrls: ['./indian.component.css']
})
export class IndianComponent implements OnInit {

  cooks: string[];

  constructor(private httpClientService: HttpClientService) {

  }

  ngOnInit() {
    this.httpClientService.getCooks().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.cooks = response;
  }

}
