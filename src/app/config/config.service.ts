import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  fetchdata() {
  	return this.http.get('http://localhost:8080/values');
  }
}
