import Server from './Server';

export default class Environment {
  constructor(public name: string, public servers: Server[]) {}
}
