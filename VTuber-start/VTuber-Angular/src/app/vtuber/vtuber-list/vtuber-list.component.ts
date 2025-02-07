import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { VTuber } from '../../models/vtuber';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { VtuberEntityComponent } from '../vtuber-entity/vtuber-entity.component'; // Import your other component

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

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getVTubers().subscribe({
      next: (data) => {
        this.completeVtuberList = data.Vtubers
        this.filterVtubers = data.Vtubers
      },
      error: (err) => {
        console.error('Error fetching VTuber data:', err);
      }
    });
  }
}
