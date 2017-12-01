import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , HttpModule} from '@angular/http';
import { of } from 'rxjs/observable/of';
import { Global } from './global';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {

	basehref;

  constructor(private http: Http, private link: Global) 
  {
  	this.basehref = link.path;
   }

  url = "/assets/data/bp.json";

  getData(){
      return this.http.get(this.url)
      .map((data: any) => data.json())
  }

}
