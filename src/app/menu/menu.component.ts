import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	link;
	public isCollapsed = true;

  constructor(private _router: Router) {
    this.link = _router;
   }

  ngOnInit() {
  }

}
