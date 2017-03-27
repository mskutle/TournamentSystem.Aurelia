import { Person } from './person';
import { Player } from './player';
import { BaseModel } from './base-model';

export class Team extends BaseModel {
    name: string;
    owner: Person;
    players: Array<Player>;

    constructor(name: string) {
        super();
        this.name = name;
    }
}