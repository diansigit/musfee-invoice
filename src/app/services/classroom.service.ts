import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services';
import { BASE_API_URL } from '../app.constant';

const endpoint = {
  rooms: BASE_API_URL + '/assets/data/rooms.json',
  sessions: BASE_API_URL + '/assets/data/sessions.json',
  classroom: BASE_API_URL + '/assets/data/classroom.json'
};

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {


  constructor(
    private httpSvc: HttpService
  ) { }

  getRooms(): Observable<any> {
    return this.httpSvc.get(endpoint.rooms);
  }

  getSessions(): Observable<any> {
    return this.httpSvc.get(endpoint.sessions);
  }

  create(): Observable<any> {
    // return this.httpSvc.post(endpoint.classroom);
    return of([]);
  }

  read(): Observable<any> {
    return this.httpSvc.get(endpoint.classroom);
  }

  update(): Observable<any> {
    // return this.httpSvc.put(endpoint.classroom);
    return of([]);
  }

  delete(): Observable<any> {
    // return this.httpSvc.delete(endpoint.classroom);
    return of([]);
  }
}
