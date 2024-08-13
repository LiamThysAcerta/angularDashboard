import { Injectable, Input } from '@angular/core';
import { HealthResponse } from '../classes/HealthResponse';
import axios from 'axios';
import Status, { DownStatus } from '../classes/Status';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  async getServer(server: string): Promise<Status> {
    try {
      const response = await axios.get<HealthResponse>(
        `http://${server}.global.dns:8080/AES/actuator/health`
      );
      const statusData = this.responseToStatus(response.data);
      return statusData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return new DownStatus();
    }
  }

  async getContainer(server: string): Promise<Status> {
    try {
      const response = await axios.get<HealthResponse>(
        `https://connect-frontend.${server}.k8s.acerta.io/AES/actuator/health`
      );
      const statusData = this.responseToStatus(response.data);
      return statusData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return new DownStatus();
    }
  }

  responseToStatus = (response: HealthResponse): Status => {
    return {
      status: response.status,
      versionInfo: {
        version: response.versionInfo.version,
        revision: response.versionInfo.revision,
        creationDate: response.versionInfo.creationDate,
      },
    };
  };
}
