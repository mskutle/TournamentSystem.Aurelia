import { inject } from 'aurelia-framework';
import { TournamentService } from '../../services/tournament-service';
import { Tournament } from '../../models/tournament';

@inject(TournamentService)
export class TournamentsList {
    
    tournamentService: TournamentService;
    tournaments: Array<Tournament>;

    constructor(tournamentService: TournamentService) {
        this.tournamentService = tournamentService;
    }

    async bind() {
        this.tournaments = await this.tournamentService.getAll();
    }

    unbind() {
        this.tournaments = [];
    }

    async deleteTournament(tournament: Tournament) {
        
        let response = await this.tournamentService.delete(tournament);
        let index = this.tournaments.indexOf(tournament);
        
        if(index !== -1) {
            this.tournaments.splice(index, 1);
        }
    }
}