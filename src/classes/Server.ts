export default class Server {
  name: string;
  isContainer: boolean;

  constructor(name: string = '', isContainer: boolean = false) {
    this.name = name;
    this.isContainer = isContainer;
  }
}
