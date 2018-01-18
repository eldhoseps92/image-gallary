import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  urls=[];
  numberOfImages:number=6;
  url=environment.url+'random/300x250?';
    constructor(  private router: ActivatedRoute) { }

  ngOnInit() {
        let key = this.router.snapshot.params['key'];
        for(let i=0;i<this.numberOfImages;i++){
        this.urls.push({url:this.url+key+',sig='+i,desc:"Description"+i,count:"like"})
        }
  }
counter(index){
    (this.urls[index].count=="like")?this.urls[index].count=1:this.urls[index].count++;
  }
}
