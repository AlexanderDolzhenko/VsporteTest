import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IClubMember } from '../../../../../services/club-members.interface';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrl: './member-item.component.css'
})
export class MemberItemComponent {
@Input() player: IClubMember;
fcPlayers: IClubMember[] = [];
fcteam: IClubMember[] = [];
@Output() playerDragStarted = new EventEmitter<void>();
@Output() playerDragEnded = new EventEmitter<void>();

players: IClubMember[] = [];

onDragStarted(): void {
  this.playerDragStarted.emit();
}

onDragEnded(): void {
  this.playerDragEnded.emit();
}
}
