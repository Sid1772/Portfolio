import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
id=["about-me","projects","contact"]
  constructor(private router:Router) {
    Config.singlePage.subscribe(x=>{
      this.isSinglePage=x
    })
    Config.scrolledPage.subscribe(part=>{
      console.log(part)
      if(part) this.scrollTo(part);
    })
   }
isSinglePage=false;
  ngOnInit(): void {
  }
  route(path:any){
    if(this.isSinglePage==false){
    this.router.navigate(['/'+path])}
    else this.scrollTo(path)
  }
  
  scrollTo(part:any){
    
    var r=document.getElementById(part)
    if(r) r.scrollIntoView()
  }
  

}
