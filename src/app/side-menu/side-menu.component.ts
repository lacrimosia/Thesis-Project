import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  link;
  windowWidth:any;
  windowHeight:any;

  constructor(private _router: Router) { 
  	this.link = _router;
  	this.windowWidth = (window.screen.height) + "px";
    this.windowHeight = (window.screen.width) + "px";
  }

  ngOnInit() {
  }

  getWindowWidth(){
  	return this.windowWidth;
  }

}
