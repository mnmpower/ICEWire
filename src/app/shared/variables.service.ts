import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  constructor() {
  }

  getAPIBase_URL(): string {
    if (environment.production) {
      console.log('WE HALEN DATA LOKAAL OP!!');
      return 'https://localhost:44358/api/'; //LOCKAL DELOYMENT
    }
    return 'http://84.196.241.162:5000/api/'; //ONLINE SERVER

  }
}

