import { Component, Input } from '@angular/core';

@Component({
  selector: 'vtuber-header',
  imports: [],
  templateUrl: './vtuber-header.component.html',
  styleUrl: './vtuber-header.component.scss'
})
export class VtuberHeaderComponent {
  @Input() displayTitle: string = 'Vtuber Database';
}
