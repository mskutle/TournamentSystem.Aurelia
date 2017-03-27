import { ValidationControllerFactory, ValidationController, ValidationRules, validationMessages } from 'aurelia-validation';
import { BootstrapFormRenderer } from '../../validation/bootstrap-form-renderer';
import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { TeamService } from '../../services/team-service';
import { Team } from "../../models/team";

@inject(ValidationControllerFactory, TeamService, Router)
export class TeamsCreate {
    
    controller: ValidationController;
    teamService: TeamService;
    router: Router;

    name: string;

    constructor(controllerFactory: ValidationControllerFactory, teamService: TeamService, router: Router) {

        this.teamService = teamService;
        this.router = router;

        this.controller = controllerFactory.createForCurrentScope();
        this.controller.addRenderer(new BootstrapFormRenderer());
    }

    async create() {

        let team = new Team(this.name);
        let createdTeam: Team = await this.teamService.add(team);

        this.router.navigateToRoute('team-details', { id: createdTeam._id })
    }

    bind() {
        ValidationRules
            .ensure((t: Team) => t.name).displayName('Navn').required()
            .on(this);

        validationMessages['required'] = `\${$displayName} er et påkrevd felt.`;
    }
}