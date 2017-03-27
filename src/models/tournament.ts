import * as moment from 'moment';
import { Team } from './team';
import { BaseModel } from './base-model';

export class Tournament extends BaseModel {
    
    name: string;
    startDate: moment.Moment;
    endDate: moment.Moment;
    teams: Array<Team>;
    tournamentType: string;

    constructor(name: string, type: string, startDate: moment.Moment, endDate: moment.Moment) {

        super();

        this.name = name;
        this.tournamentType = type;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    get numberOfTeams() {
        return this.teams.length;
    }
}