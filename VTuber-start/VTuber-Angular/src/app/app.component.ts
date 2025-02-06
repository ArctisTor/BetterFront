import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VtuberHeaderComponent } from './header/vtuber-header.component';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VtuberHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'VTuber Database';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getVTubers().subscribe((data) => {
      console.log(data); // Should log VTuber data from Node.js backend
    });
  }

}
