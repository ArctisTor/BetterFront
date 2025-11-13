import { Component, Input } from '@angular/core';
import { VTuber } from '../../models/vtuber'; // Make sure this import path is correct

@Component({
  selector: 'vtuber-entity',
  standalone: true,
  templateUrl: './vtuber-entity.component.html',
  styleUrls: ['./vtuber-entity.component.scss']
})
export class VtuberEntityComponent {
  @Input() vtuberEntity!: VTuber;  // Ensure this is the correct property name and type
}
