import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../classes/Project';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }
}
