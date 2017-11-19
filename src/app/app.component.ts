import { Component, OnInit, Input, Output } from '@angular/core';
import { Http , HttpModule} from '@angular/http';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})


export class AppComponent implements OnInit {
  title = 'app';
  name = "";

  // Inject HttpClient into your component or service.
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAllData("../assets/data/test.json");
  }

  getAllData(url){
  	// Make the HTTP request:
    this.dataService.getData(url).subscribe(data => {
      // Read the result field from the JSON response.
      this.name = data.name;
    });
  }

}
