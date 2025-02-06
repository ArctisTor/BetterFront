// src/app/vtuber-entity/vtuber-entity.component.ts
import { Component, Input } from '@angular/core';
import { VTuber } from '../../models/vtuber';  // Import the VTuber model

@Component({
  selector: 'app-vtuber-entity',
  templateUrl: './vtuber-entity.component.html',
  styleUrls: ['./vtuber-entity.component.scss']
})
export class VtuberEntityComponent {
  @Input() vtuber: VTuber | undefined;  // Use Input to pass vtuber data from parent
}
