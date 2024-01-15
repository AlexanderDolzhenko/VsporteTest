import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlace } from './club-members.interface';

@Injectable({
  providedIn: 'root'
})
export class ClubPositionrService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3000/place'

  getAll() {
    return this.http.get<IPlace>(this.API_URL)
  }
}
