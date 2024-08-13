import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ServerService } from '../../services/server.service';
import Status from '../../classes/Status';
import Server from '../../classes/Server';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ServerComponent implements OnInit {
  @Input() server: Server;
  @Input() isContainer = false;
  status: Status;

  constructor(private serverService: ServerService) {
    this.status = new Status();
    this.server = new Server();
  }

  ngOnInit() {
    if (this.server.isContainer) {
      this.getStatusContainer();
    } else {
      this.getStatus();
    }
  }

  async getStatus() {
    this.status = await this.serverService.getServer(this.server.name);
  }

  async getStatusContainer() {
    this.status = await this.serverService.getContainer(this.server.name);
  }

  public setStatus(status: Status) {
    return (this.status = status);
  }
}
