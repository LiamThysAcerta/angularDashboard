import { Component, Input } from '@angular/core';
import { ServerService } from '../../services/server.service';
import Status, { DownStatus } from '../../classes/Status';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  @Input() server = '';
  status: Status;

  constructor(private serverService: ServerService) {
    this.status = this.serverService.getServer(this.server);
  }
}
