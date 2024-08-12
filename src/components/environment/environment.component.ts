import { Component, Input } from '@angular/core';
import Environment from '../../classes/Environment';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-environment',
  standalone: true,
  imports: [ServerComponent],
  templateUrl: './environment.component.html',
  styleUrl: './environment.component.css',
})
export class EnvironmentComponent {
  @Input() environment: Environment = new Environment('default', ['v00l0000']);
}
