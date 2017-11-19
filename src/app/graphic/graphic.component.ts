import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css'],
  providers: [DataService]
})
export class GraphicComponent implements OnInit {

  constructor() { }

  @Input() heading;
  @Input() info;
  @Input() background;
  @Input() components;

  ngOnInit() {
  }

}
