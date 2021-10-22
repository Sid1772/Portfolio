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
  open(path:string){
    switch(path){
      case 'projects':{
        this.router.navigate(['/'+path])
        break;
      }
      default:{
      
        window.open(this.configpath.Resume,"_blank")
      }
    }

  }

}
