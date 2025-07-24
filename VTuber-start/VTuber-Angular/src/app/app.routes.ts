import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./vtuber/vtuber-list/vtuber-list.component').then((m) => m.VTuberListComponent),
    },
    {
        path: 'organization',
        loadComponent: () =>
            import('./organizations/organization/organization.component').then(
                (m) => m.OrganizationComponent,
            ),
    },
]
