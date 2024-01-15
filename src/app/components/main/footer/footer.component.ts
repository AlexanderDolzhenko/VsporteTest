import { Component, Input} from '@angular/core';
import { IClubManager } from '../../../services/club-members.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent  {
@Input() manager: IClubManager;
}
