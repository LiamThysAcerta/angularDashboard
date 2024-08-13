export default class Status {
  status: string;
  versionInfo: {
    version: string;
    revision: string;
    creationDate: string | null;
  };

  constructor(
    status: string = '',
    version: string = '',
    revision: string = '',
    creationDate: string = ''
  ) {
    this.status = status;
    this.versionInfo = {
      version,
      revision,
      creationDate,
    };
  }
}
export class DownStatus implements Status {
  status = 'DOWN';
  versionInfo = {
    version: '-',
    revision: '-',
    creationDate: '-',
  };
}
