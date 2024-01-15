import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClubManager } from './club-members.interface';

@Injectable({
  providedIn: 'root'
})
export class ClubManagerService {

constructor(private http: HttpClient) { }

API_URL = 'http://localhost:3000/manager'

getAll() {
  return this.http.get<IClubManager>(this.API_URL)
  }
}
