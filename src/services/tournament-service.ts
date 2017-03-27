import { BaseApiService } from './base-api-service';
import { Tournament } from '../models/tournament';
import { json } from 'aurelia-fetch-client';
import { Team } from '../models/team';

export class TournamentService extends BaseApiService {

    async getAll(): Promise<Array<Tournament>> {
        
        let response = await this.httpClient.fetch('tournaments', {
            method: 'get'
        });

        return response.json();
    }

    async add(tournament: Tournament): Promise<Tournament> {

        let response = await this.httpClient.fetch('tournaments', {
            method: 'post',
            body: json(tournament)          
        });

        return response.json();
    }

    async delete(tournament: Tournament) {

        let response = await this.httpClient.fetch(`tournaments/${tournament._id}`, {
            method: 'delete',
            body: json(tournament)
        });
    }

    async getById(id: string): Promise<Tournament> {

        let response = await this.httpClient.fetch(`tournaments/${id}`, {
            method: 'get'
        });

        return response.json();
    }

    async addTeamToTournament(id: string, team: Team): Promise<Tournament> {
        
        let response = await this.httpClient.fetch(`tournaments/${id}/teams`, {
            method: 'post',
            body: json(team)
        });

        return response.json();
    }
}