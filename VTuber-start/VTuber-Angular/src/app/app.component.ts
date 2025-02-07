import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VtuberHeaderComponent } from './header/vtuber-header.component';
import { VTuberListComponent } from './vtuber/vtuber-list/vtuber-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VtuberHeaderComponent, VTuberListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VTuber Database';

}
