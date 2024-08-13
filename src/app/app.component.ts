import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Project } from '../classes/Project';
import { ProjectComponent } from '../components/project/project.component';
import { NgOptimizedImage } from '@angular/common';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ProjectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  logoUrl = 'assets/acerta.png';
  logoAlt = 'Acerta logo';

  title = 'angularDashboard';
}
