import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormationService } from '../../../../services/formation.service';
import { IClubMember, IPlace } from '../../../../services/club-members.interface';

import { ClubMemberService } from '../../../../services/club-member.service';
import { ClubPositionrService } from '../../../../services/club-position.service';


@Component({
  selector: 'app-team-formation',
  templateUrl: './team-formation.component.html',
  styleUrl: './team-formation.component.css'
})
export class TeamFormationComponent implements OnInit {

fcPlayers: IClubMember[] = [];
fcPositions: IPlace[] = [];
fcteam: IClubMember[] = [];
constructor(private footballService: FormationService,
  private memberService: ClubMemberService,
  private positionService: ClubPositionrService) {}

ngOnInit(): void {
  this.memberService.getAll().subscribe(data => {
    this.fcPlayers = Array.isArray(data) ? data : [data];
    });
  this.positionService.getAll().subscribe(data => {
    this.fcPositions = Array.isArray(data) ? data : [data];
    });
  }
  cardPosition = { top: '100px', left: '100px' };
  isDraggingAllowed = false;

  onPlayerDragStarted(): void {
    this.isDraggingAllowed = true;
  }

  onPlayerDragEnded(): void {
    this.isDraggingAllowed = false;
  }
}
