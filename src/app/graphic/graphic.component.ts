import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css'],
  providers: [DataService]
})
export class GraphicComponent implements OnInit {

  constructor(private dataService: DataService) { }

  //@Input() heading;
  //@Input() info;
  //@Input() background;
  //@Input() components;
  data = "";

  ngOnInit() {
  	this.getData("../assets/data/bp.json");
  }

  getData(url){
  	// Make the HTTP request:
    this.dataService.getData(url).subscribe(data => {
      // Read the result field from the JSON response.
      this.data = data;
    });
  }

}
