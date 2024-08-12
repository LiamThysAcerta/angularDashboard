import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Project } from '../classes/Project';
import Environment from '../classes/Environment';
import { ProjectComponent } from '../components/project/project.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, RouterOutlet, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  logoUrl = 'assets/acerta.png';
  logoAlt = 'Acerta logo';

  title = 'angularDashboard';

  projects: Project[] = [
    new Project('Connect', [
      new Environment('DEV', ['v04l9431']),
      new Environment('TST', ['v03l0036', 'v03l0037', 'v03l0038']),
      new Environment('ACC', ['v02l0036', 'v02l0037', 'v02l0038']),
    ]),
    new Project('CKB', [
      new Environment('TST', ['v03l0039']),
      new Environment('ACC', ['v02l0039']),
    ]),
  ];
}
