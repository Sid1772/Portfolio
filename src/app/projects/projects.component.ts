import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  selectedIndex!:number
projects=[
  {
    title:"User Table",image:"assets/img/UserTable.PNG",link:"https://user-table-93bce.firebaseapp.com/",githublink:"https://github.com/Sid1772/AdminUI",codepenlink:"",stackblitzlink:"",details:"Admin Table created using Angular and Angular Material with Pagination.Includes features like selection,deletion updation and search",skills:["Angular","Javascript","HTML","CSS"]
  },
  {
    title:"Block Game",image:"assets/img/blockgame.PNG",link:"https://angular-ivy-dkf6vg.stackblitz.io",githublink:"https://github.com/Sid1772/Block-Game",codepenlink:"",stackblitzlink:"https://stackblitz.com/edit/angular-ivy-dkf6vg?file=src/app/app.component.html",details:"A simple Block Game created using Javascript and DOM manipulation using JS.Box is moved around a box using arrow keys andmouse pressdown ",skills:["Javascript","HTML","CSS"]
  },
  {
    title:"Finding Falcone",image:"assets/img/findingfalcone.PNG",link:"https://finding-falcone-926ab.web.app/home",githublink:"https://github.com/Sid1772/FindingFalcone",codepenlink:"",stackblitzlink:"",details:"A fun game created using Angular where user can select various planets and spaceships which are fetched by API and user has to find a certain person hidden on those planets",skills:["Angular","Javascript","Typescript","HTML","CSS"]
  },
  {
    title:"Admin Table",image:"assets/img/AdminUI.PNG",link:"https://angular-ivy-d1hgaf.stackblitz.io",githublink:"https://github.com/Sid1772/AngularMaterialTable",codepenlink:"",stackblitzlink:"https://stackblitz.com/edit/angular-ivy-d1hgaf?file=src/app/app.component.ts",skills:[""]
  }
]
  constructor() { }

  ngOnInit(): void {
  }
route(link:string){
  window.open(link,"_blank")
 
}
showDetails(index:any){
this.selectedIndex=+index;
}
}

