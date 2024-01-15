import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClubMember } from './club-members.interface';

@Injectable({
  providedIn: 'root'
})
export class ClubMemberService {

constructor(private http: HttpClient) { }

API_URL = 'http://localhost:3000/players'

getAll() {
  return this.http.get<IClubMember>(this.API_URL)
  }
}
