import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Global } from '../global';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css'],
  providers: [DataService, Global]
})
export class GraphicComponent implements OnInit {

  constructor(private dataService: DataService, private link: Global) {this.basehref = link.path; }

  //@Input() heading;
  //@Input() info;
  //@Input() background;
  //@Input() components;
  data = "";
  basehref;

//  @ViewChild('button') public popover: NgbPopover;

  ngOnInit() {
  	this.getData();
  }

  getData(){
  	// Make the HTTP request:
    this.dataService.getData().subscribe(data => {
      // Read the result field from the JSON response.
      this.data = data;
    });
  }

}
