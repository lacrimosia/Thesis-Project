import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [DataService]
})
export class InfoComponent implements OnInit {

 @Input() myname;
  constructor() { }

  ngOnInit() {
  }
}
