import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IClubMember, IPlace } from '../../../../../services/club-members.interface';
import { CdkDrag, CdkDragDrop, CdkDropList, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-formation-item',
  templateUrl: './formation-item.component.html',
  styleUrl: './formation-item.component.css'
})
export class FormationItemComponent {
@Input() player: IClubMember;
@Input() position: IPlace;

fcPlayers: IClubMember[] = [];
fcteam: IClubMember[] = [];
dropped: boolean = false;

handleDrop() {
  this.dropped = true;
  }

@ViewChild('card') card: ElementRef;
cardBoundary: HTMLElement;
droppedPlayers: IClubMember[] = [];

ngAfterViewInit() {
  this.cardBoundary = this.card.nativeElement;
  }

onDrop(event: CdkDragDrop<IClubMember[]>): void {
  if (event.previousContainer !== event.container) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

  const droppedPlayer: IClubMember = event.item.data;
    this.droppedPlayers.push(droppedPlayer);
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

