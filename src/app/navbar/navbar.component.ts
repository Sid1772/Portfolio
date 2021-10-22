import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Config} from '../app.config'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isMenuOpen=false
config=Config
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
openMenu(){
  this.isMenuOpen=!this.isMenuOpen
}
route(routeTo:any){
  if(this.isMenuOpen){
    this.isMenuOpen=false
    
  }
  this.router.navigate(['/'+routeTo])
}
}
