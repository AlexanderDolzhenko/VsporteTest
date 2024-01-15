import { Component, OnInit } from '@angular/core';
import { IClubMember, IPlace } from '../../../../services/club-members.interface';
import { ClubMemberService } from '../../../../services/club-member.service';
import { FormationService } from '../../../../services/formation.service';
import { CdkDragDrop, CdkDragEnter, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-club-member-list',
  templateUrl: './club-member-list.component.html',
  styleUrl: './club-member-list.component.css'
})
export class ClubMemberListComponent implements OnInit {
fcPlayers: IClubMember[] = [];

constructor(private memberService: ClubMemberService, private footballService: FormationService) {}

ngOnInit(): void {
  this.memberService.getAll().subscribe(data => {
    this.fcPlayers = Array.isArray(data) ? data : [data];
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
