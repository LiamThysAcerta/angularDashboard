import { Injectable } from '@angular/core';
import { Project } from '../classes/Project';
import Environment from '../classes/Environment';
import Server from '../classes/Server';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[];

  constructor() {
    this.projects = [
      new Project('Containers', [
        new Environment('', [
          new Server('dev', true),
          new Server('tst', true),
          new Server('acc', true),
        ]),
      ]),
      new Project('Virtual machines', [
        new Environment('DEV', [new Server('v04l9431', false)]),
        new Environment('TST', [
          new Server('v03l0037', false),
          new Server('v03l0038', false),
        ]),
        new Environment('ACC', [
          new Server('v02l0036', false),
          new Server('v02l0037', false),
          new Server('v02l0038', false),
        ]),
      ]),
    ];
  }

  getProjects() {
    return this.projects;
  }
}
