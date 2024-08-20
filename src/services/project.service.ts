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
          new Server('dev'),
          new Server('tst'),
          new Server('acc'),
        ]),
      ]),
      new Project('Virtual machines', [
        new Environment('DEV', [new Server('v04l9431')]),
        new Environment('TST', [
          new Server('v03l0037'),
          new Server('v03l0038'),
        ]),
        new Environment('ACC', [
          new Server('v02l0036'),
          new Server('v02l0037'),
          new Server('v02l0038'),
        ]),
      ]),
      new Project('Containers dicco-rest', [
        new Environment('', [
          new Server('dev'),
          new Server('tst'),
          new Server('acc'),
        ]),
      ]),
    ];
  }

  getProjects() {
    return this.projects;
  }
}
