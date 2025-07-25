import { Component, OnInit } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router'
import { VtuberHeaderComponent } from './header/vtuber-header.component'
import { VtuberService } from './services/vtuber.service'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, VtuberHeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'VTuber Database'

    constructor(private vtuberService: VtuberService, private router: Router) {}

    ngOnInit(): void {
        this.vtuberService.fetchVTubers()
    }
}
