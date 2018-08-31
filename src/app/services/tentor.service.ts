import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/services';
import { BASE_API_URL } from '../app.constant';

const endpoint = {
  tentor: BASE_API_URL + '/assets/data/tentors.json'
};
@Injectable({
  providedIn: 'root'
})
export class TentorService {

  constructor(private httpSvc: HttpService) { }

  read(): Observable<any> {
    return this.httpSvc.get(endpoint.tentor);
  }

}
