import { UUID } from 'crypto';
import Server from './Server';

export default class Environment {
  constructor(public id: UUID, public name: string, public servers: Server[]) {}
}
