import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'
import { Router} from '@angular/router'

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public cards;
  public router: Router;

  constructor(private http: Http, private r: Router) { 
    this.router = r;
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

  onClick(card) {
    this.router.navigate(['/project', card.id])
  }

}
