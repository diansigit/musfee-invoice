import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/services';
import { BASE_API_URL } from '../app.constant';

const endpoint = {
  enrollment: BASE_API_URL + '/assets/data/enrollments.json'
};

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private httpSvc: HttpService) { }

  read(): Observable<any> {
    return this.httpSvc.get(endpoint.enrollment);
  }

}
