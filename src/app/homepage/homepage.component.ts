import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public cards;
  constructor(private http: Http) { 
    this.http = http;
  }

  ngOnInit() {
    var result = this.http.get('../../assets/frontpagecards.json')
      .map((res:any) => res.json())
      .subscribe({
        next: x => {
          this.cards = x;
        }
    });
  }

}
