import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , HttpModule} from '@angular/http';
import { of } from 'rxjs/observable/of';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData(url){
      return this.http.get(url)
      .map((data: any) => data.json())

  }

}
