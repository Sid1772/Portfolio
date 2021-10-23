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
isSinglePage=false
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
openMenu(){
  this.isMenuOpen=!this.isMenuOpen
}
toggleClass(ev:any){
  Config.singlePage.next(ev)
  this.isSinglePage=ev
  this.configureSinglePage()

}
configureSinglePage(){
    if(this.isSinglePage){
      const route=this.router.url.slice(1)
      this.router.navigate(['home'])
      setTimeout(()=>{this.route(route)},500)
      
    }
    else{

    }
}
route(routeTo:any){
  
  if(this.isMenuOpen){
    this.isMenuOpen=false
  }
  if(!this.isSinglePage){
  this.router.navigate(['/'+routeTo])
}
else{
   this.config.scrolledPage.next(routeTo)
}}
}
