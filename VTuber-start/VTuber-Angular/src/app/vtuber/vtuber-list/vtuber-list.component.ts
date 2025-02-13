import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { VTuber } from '../../models/vtuber';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { VtuberEntityComponent } from '../vtuber-entity/vtuber-entity.component'; // Import your other component
import { VtuberService } from '../../services/vtuber.service';

@Component({
  selector: 'vtuber-list',
  standalone: true,
  imports: [CommonModule, VtuberEntityComponent],  // Add CommonModule here
  templateUrl: './vtuber-list.component.html',
  styleUrls: ['./vtuber-list.component.scss']
})
export class VTuberListComponent implements OnInit {
  completeVtuberList: VTuber[] = [];
  filterVtubers: VTuber[] = [];

  constructor(private vtuberService: VtuberService) {}

  ngOnInit(): void {
    this.vtuberService.completeVtuberList.subscribe({
      next: (vtubers) => {
        this.completeVtuberList = vtubers;
        this.filterVtubers = vtubers;
      }
    });
  }
}
