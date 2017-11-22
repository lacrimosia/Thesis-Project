import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [DataService]
})
export class InfoComponent implements OnInit {

 //@Input() title;
 //@Input() description;

  data = "";
  constructor(private dataService: DataService) { }

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
