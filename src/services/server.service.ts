import { Injectable, Input } from '@angular/core';
import { HealthResponse } from '../classes/HealthResponse';
import axios from 'axios';
import Status, { DownStatus } from '../classes/Status';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  getServer(server: string): Status {
    const fetchData = async () => {
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
    };

    fetchData();

    return new DownStatus();
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
