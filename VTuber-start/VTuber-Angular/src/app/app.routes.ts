import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path : 'organization', 
        loadComponent: () => import('./organizations/organization/organization.component').then(m => m.OrganizationComponent)
    }
];
