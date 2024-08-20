import { Component, Input, ViewEncapsulation } from '@angular/core';
import Environment from '../../classes/Environment';
import { ServerComponent } from '../server/server.component';
import Server from '../../classes/Server';

@Component({
  selector: 'app-environment',
  standalone: true,
  imports: [ServerComponent],
  templateUrl: './environment.component.html',
  styleUrl: './environment.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class EnvironmentComponent {
  @Input() project: String = '';
  @Input() environment: Environment = new Environment('default', [
    new Server('v00l0000'),
  ]);
}
