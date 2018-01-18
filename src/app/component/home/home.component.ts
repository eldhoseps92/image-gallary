import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlCount:number=20;
  url=environment.url+"random/360x250?sig=";
  urls=[];
  searchKey=""
    constructor(  private router: Router) { }

    ngOnInit() { 
      for(let i=0;i<this.urlCount;i++){
        this.urls.push({url:this.url+i,count:'like',desc:"Description"+1});
      }
    } 

  counter(index){
    (this.urls[index].count=="like")?this.urls[index].count=1:this.urls[index].count++;
  }
  search(key){
    this.router.navigate(['/search',this.searchKey]);

  }
}
