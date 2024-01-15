import { Component, OnInit } from '@angular/core';
import { IClubManager } from '../../services/club-members.interface';
import { ClubManagerService } from '../../services/club-manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  fcManager: IClubManager[] = [];

  constructor(private managerService: ClubManagerService) {}


  ngOnInit(): void {
    this.managerService.getAll().subscribe(data => {
      this.fcManager = Array.isArray(data) ? data : [data];
    })
  }
}
