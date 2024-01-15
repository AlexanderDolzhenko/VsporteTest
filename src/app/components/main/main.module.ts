import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ClubMemberListComponent } from './content/club-member-list/club-member-list.component';
import { TeamFormationComponent } from './content/team-formation/team-formation.component';
import { MemberItemComponent } from './content/club-member-list/member-item/member-item.component';
import { FormationItemComponent } from './content/team-formation/formation-item/formation-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    ContentComponent,
    ClubMemberListComponent,
    TeamFormationComponent,
    MemberItemComponent,
    FormationItemComponent
  ],
  exports: [MainComponent],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class MainModule { }
