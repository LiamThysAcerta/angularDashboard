export default class Server {
  name: string;
  subname: string;
  endpoint: string;

  constructor(name: string = '', subname: string = '', endpoint: string = '') {
    this.name = name;
    this.subname = subname;
    this.endpoint = endpoint;
  }
}
