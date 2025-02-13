import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VtuberHeaderComponent } from './header/vtuber-header.component';
import { VTuberListComponent } from './vtuber/vtuber-list/vtuber-list.component';
import { VtuberService } from './services/vtuber.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VtuberHeaderComponent, VTuberListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'VTuber Database';

  constructor(private vtuberService: VtuberService) {}

  ngOnInit(): void {
   this.vtuberService.fetchVTubers(); 
  }
}
