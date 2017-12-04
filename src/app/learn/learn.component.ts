import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Router, RouterLinkActive} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
  providers: [DataService]
})
export class LearnComponent implements OnInit {
  // @Input() heading;
  // @Input() slides;
  data = "";
  link;
  sanitize;
  id;

  constructor(private dataService: DataService, private _router: Router, private _dom: DomSanitizer) { 
    this.link = _router;
    this.sanitize = _dom;
  }

  ngOnInit() {
  	this.grabInfo();
  }

  grabInfo(){
  	// Make the HTTP request:
    this.dataService.getData().subscribe(data => {
      // Read the result field from the JSON response.
      this.data = data;
    });
  }
}
