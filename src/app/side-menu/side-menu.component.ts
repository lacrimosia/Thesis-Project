import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  link;

  constructor(private _router: Router) { 
  	this.link = _router;
  }

  ngOnInit() {
  }

}
