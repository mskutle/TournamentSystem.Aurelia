import {RouterConfiguration, Router} from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { BaseApiService } from './services/base-api-service';

@inject(BaseApiService)
export class App {
  
  router: Router;
  api: BaseApiService;

  constructor(api: BaseApiService) {
	  this.api = api;
  }

  configureRouter(config: RouterConfiguration, router: Router): void {
      this.router = router;

      config.title = "TournamentSystem"
      config.map([
        { route: ['', 'home'],  name: 'home',   moduleId: 'home/index',   nav: true,  title: 'Hjem' },
        { route: 'tournaments',  name: 'tournaments',  moduleId: 'pages/tournaments',  nav: true,  title: 'Turneringer'}, 
        { route: 'tournaments/:id',  name: 'tournament-details',  moduleId: 'components/tournaments/tournament-details', nav: false },
        { route: 'teams',   name: 'teams',  moduleId: 'pages/teams',  nav: true,  title: 'Lag'},
        { route: 'teams/:id',   name: 'team-details',   moduleId: 'components/teams/team-details',  nav: false }
      ])
  }

}
