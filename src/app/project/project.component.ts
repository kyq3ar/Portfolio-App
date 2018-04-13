import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Http, Headers, RequestOptions } from "@angular/http";

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public id: number;
  private subscription: any;
  public route: ActivatedRoute;
  public router: Router;
  public card;
  public list;
  public isUnlocked;
  public password : string;

  constructor(private http: Http,
              public activatedRoute: ActivatedRoute,
              private r: Router) { 
    this.route = activatedRoute;
    this.http = http;
    this.router = r;
    this.isUnlocked = false;
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params.projectId;
    });
    var result = this.http.get('../../assets/frontpagecards.json')
      .map((res:any) => res.json())
      .subscribe({
        next: x => {
          this.card = x[this.id-1];
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

  sectionLocked(locked) {
    if(locked){
      return this.isUnlocked;
    }
    else {
      return true;
    }
  }
  
  passwordSectionShown() {
    console.log(!this.isUnlocked);
    return !this.isUnlocked;
  }

  checkPassword(){
    console.log(this.password);
    if(this.password == "Hello"){
      this.isUnlocked = true;
    }
    this.password = "";
  }



}
