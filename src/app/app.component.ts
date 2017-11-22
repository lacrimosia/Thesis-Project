import { Component, OnInit, Input, Output } from '@angular/core';
import { Http , HttpModule} from '@angular/http';
import { DataService } from './data.service';
import { Router, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})


export class AppComponent implements OnInit {
  data = "";
  link;

  // Inject HttpClient into your component or service.
  constructor(private dataService: DataService, private _router: Router) {
    this.link = _router;
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
  	// Make the HTTP request:
    this.dataService.getData().subscribe(data => {
      // Read the result field from the JSON response.
      this.data = data;
    });
  }

}
