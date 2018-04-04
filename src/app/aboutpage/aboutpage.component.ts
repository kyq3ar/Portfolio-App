import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss']
})
export class AboutpageComponent implements OnInit {

  public card;
  public list;
  public router: Router;
  public route: ActivatedRoute;

  constructor(private http: Http, 
    public activatedRoute: ActivatedRoute,
    private r: Router) { 
    this.router = r;
    this.http = http;
  }

  ngOnInit() {
    var result = this.http.get('../../assets/aboutpage.json')
      .map((res:any) => res.json())
      .subscribe({
        next: x => {
          this.card = x[0];
          this.list = this.card.body;
        }
    });
  }
  getKey(key){
    return key.replace(/[0-9]/g, '');
  }

  ifSpecial(key) {
    let newKey = this.getKey(key);
    if(newKey=='image' || newKey=='input' || newKey=='unlock')
      return true;
    else
      return false;
  }
}