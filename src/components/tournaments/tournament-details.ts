import { Tournament } from '../../models/tournament';
import { inject } from 'aurelia-framework';
import { TournamentService } from '../../services/tournament-service';
import { Team } from '../../models/team';
import { TeamService } from "../../services/team-service";
import { RouteConfig } from 'aurelia-router';

@inject(TournamentService, TeamService)
export class TournamentDetails {
    
    teamService: TeamService;
    tournamentService: TournamentService;
    tournament: Tournament;
    selectableTeams: Array<Team>;
    selectedTeam: Team;
    routeConfig: RouteConfig;

    constructor(tournamentService: TournamentService, teamService: TeamService) {
        this.tournamentService = tournamentService;
        this.teamService = teamService;
    }

    async addTeamToTournament() {
        this.tournament = await this.tournamentService.addTeamToTournament(this.tournament._id, this.selectedTeam)
    }

    async activate(params, routeConfig: RouteConfig) {

        this.routeConfig = routeConfig;
        this.tournament = await this.tournamentService.getById(params.id);

        this.routeConfig.navModel.setTitle(this.tournament.name);
    }

    async bind() {
        this.selectableTeams = await this.teamService.getAll();
    }

    unbind() {
        this.selectableTeams = [];
    }

}