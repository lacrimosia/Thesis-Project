import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [DataService]
})
export class InfoComponent implements OnInit {

 //@Input() title;
 //@Input() description;
 link;

  data = "";
  constructor(private dataService: DataService, private _router: Router) {
     this.link = _router;
   }

  ngOnInit() {
  	this.grabData();
  }

  grabData(){
  	// Make the HTTP request:
    this.dataService.getData().subscribe(data => {
      // Read the result field from the JSON response.
      this.data = data;
    });
  }
}
