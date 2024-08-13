import { Component, Input, ViewEncapsulation } from '@angular/core';
import { EnvironmentComponent } from '../environment/environment.component';
import { Project } from '../../classes/Project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [EnvironmentComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ProjectComponent {
  @Input() project: Project = new Project('defaultProject', []);
}
