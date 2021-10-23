import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../app.config';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
config=Config.aboutMe
configpath=Config;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  open(path:any){
    switch(path){
      case 'projects':{
        console.log(Config.singlePage)
        if(!Config.singlePage.value){

        this.router.navigate(['/'+path])}
        else{
          Config.scrolledPage.next(path)
        }
        break;
      }
      default:{
      
        window.open(this.configpath.Resume,"_blank")
      }
    }

  }

}
