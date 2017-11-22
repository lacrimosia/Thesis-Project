import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

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

  constructor(private dataService: DataService) { }

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
