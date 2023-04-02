import { Component,OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(){}

  ngOnInit(){

  }
  nav_variable=false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 ||document.documentElement.scrollTop >10){
      this.nav_variable=true;
    }
    else{
      this.nav_variable=false;
    }
  }
}


