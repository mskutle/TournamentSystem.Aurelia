import { inject } from 'aurelia-framework';
import { RouteConfig } from 'aurelia-router';
import { TeamService } from '../../services/team-service';
import { PlayerService } from '../../services/player-service';
import { Team } from '../../models/team';
import { Player } from '../../models/player';

@inject(TeamService, PlayerService)
export class TeamDetails {

    teamService: TeamService;
    playerService: PlayerService;
    team: Team;
    selectablePlayers: Array<Player>;
    selectedPlayer: Player;
    routeConfig: RouteConfig;

    constructor(teamService: TeamService, playerService: PlayerService) {
        this.teamService = teamService;
        this.playerService = playerService;
    }

    async addPlayerToTeam() {
        this.selectedPlayer.teamId = this.team._id;
        this.playerService.update(this.selectedPlayer);
    }

    async activate(params, routeConfig: RouteConfig) {
        this.routeConfig = routeConfig;
        this.team = await this.teamService.getById(params.id);

        this.routeConfig.navModel.setTitle(this.team.name);
    }

    async bind() {
        this.selectablePlayers = await this.playerService.getAll();
    }
}