import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Config} from './app.config'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  constructor(){
  //  if(!confirm("Welcome to my Page Do you want to view a single page portfolio")){
  //    Config.singlePage=true
     
  //  }
  
  }
}
