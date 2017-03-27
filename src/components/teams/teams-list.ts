import { Team } from '../../models/team';
import { TeamService } from '../../services/team-service';
import { inject } from 'aurelia-framework';

@inject(TeamService)
export class TeamsList {

    teams: Array<Team>;
    teamService: TeamService;

    constructor(teamService: TeamService) {
        this.teamService = teamService;
    }

    async bind() {
        this.teams = await this.teamService.getAll();
    }

    async deleteTeam(team: Team) {
        let response = await this.teamService.delete(team);
        let index = this.teams.indexOf(team);
        
        if(index !== -1) {
            this.teams.splice(index, 1);
        }
    }
}