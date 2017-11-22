import { Component, OnInit } from '@angular/core';
import { Http , HttpModule} from '@angular/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
  providers: [DataService]
})
export class ModulesComponent implements OnInit {

  data = "";

 // Inject HttpClient into your component or service.
  constructor(private dataService: DataService) {}

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
