import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization',
  imports: [CommonModule],
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.scss',
  standalone: true
})
export class OrganizationComponent implements OnInit {
  ngOnInit(): void {
    console.log('OrganizationComponent is loaded!');
  }
}
