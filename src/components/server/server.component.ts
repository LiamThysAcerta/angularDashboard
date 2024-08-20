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
  @Input() project: String;
  @Input() server: Server;
  isContainer = false;
  status: Status;
  url: string;

  constructor(private serverService: ServerService) {
    this.project = '';
    this.status = new Status();
    this.server = new Server();
    this.url = '';
  }

  ngOnInit() {
    if (this.project === 'Containers') {
      this.getStatusContainer();
    } else if (this.project === 'Virtual machines') {
      this.getStatus();
    } else {
      this.getStatusContaineDiccoRest();
    }
  }

  async getStatus() {
    this.status = await this.serverService.getServer(this.server.name);
    this.url = `http://${this.server.name}.global.dns:8080/AES/`;
  }

  async getStatusContainer() {
    this.status = await this.serverService.getContainer(this.server.name);
    this.url = `https://connect-frontend.${this.server.name}.k8s.acerta.io/AES/`;
  }

  async getStatusContaineDiccoRest() {
    this.status = await this.serverService.getContainerDiccoRest(
      this.server.name
    );
    this.url = `https://dicco-rest-app.${this.server.name}.k8s.acerta.io/`;
  }

  public setStatus(status: Status) {
    return (this.status = status);
  }
}
