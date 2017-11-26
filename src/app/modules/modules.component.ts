import { Component, OnInit } from '@angular/core';
import { Http , HttpModule} from '@angular/http';
import { DataService } from '../data.service';
import { Global } from '../global';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
  providers: [DataService, Global]
})
export class ModulesComponent implements OnInit {

  data = "";
  param = "title";
  basehref;

 // Inject HttpClient into your component or service.
  constructor(private dataService: DataService, private link: Global) {
    this.basehref = link.path;
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
