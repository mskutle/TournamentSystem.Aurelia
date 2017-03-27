import { ValidationControllerFactory, ValidationController, ValidationRules, validationMessages } from 'aurelia-validation';
import { BootstrapFormRenderer } from '../../validation/bootstrap-form-renderer';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Tournament } from '../../models/tournament';
import { TournamentService } from '../../services/tournament-service';
import * as moment from 'moment';

@inject(ValidationControllerFactory, TournamentService, Router)
export class TournamentsCreate {
    
    controller: ValidationController;
    tournamentService: TournamentService;
    router: Router;

    name: string;
    startDate: moment.Moment;
    endDate: moment.Moment;
    tournamentType: string;

    constructor(controllerFactory: ValidationControllerFactory, tournamentService: TournamentService, router: Router) {

        this.tournamentService = tournamentService;
        this.router = router;

        this.controller = controllerFactory.createForCurrentScope();
        this.controller.addRenderer(new BootstrapFormRenderer());
    }

    async create() {

        let tournament = new Tournament(this.name, this.tournamentType, this.startDate, this.endDate);

        try {
            
            let createdTournament: Tournament = await this.tournamentService.add(tournament);
            
            this.router.navigateToRoute('tournament-details', { id: createdTournament._id });

        } catch(e) {
            alert(e);
        }
        
    }

    bind() {
        ValidationRules
            .ensure((t: Tournament) => t.name).displayName('Navn').required()
            .ensure((t: Tournament) => t.tournamentType).displayName('Type').required()
            .ensure((t: Tournament) => t.startDate).displayName('Startdato').required()
            .ensure((t: Tournament) => t.endDate).displayName('Sluttdato').required()
            .on(this);

        validationMessages['required'] = `\${$displayName} er et påkrevd felt.`;
    }
}