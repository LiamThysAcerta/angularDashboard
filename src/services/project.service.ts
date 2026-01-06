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
        new Environment(crypto.randomUUID(), 'dev', [
          new Server('dev', 'project-', 'AES-PROJECT'),
          new Server('dev', 'support-', 'AES-SUPPORT'),
        ]),
        new Environment(crypto.randomUUID(), 'tst', [
          new Server('tst', '', 'AES'),
          new Server('tst', '2-', 'AES2'),
          new Server('tst', '3-', 'AES3'),
        ]),
        new Environment(crypto.randomUUID(), 'acc', [
          new Server('acc', '', 'AES'),
        ]),
      ]),
      new Project('Multi ESS', [
        new Environment(crypto.randomUUID(), 'DEV / TST', [
          new Server('v04l0040'),
          new Server('v03l0040'),
        ]),
      ]),
    ];
  }

  getProjects() {
    return this.projects;
  }
}
