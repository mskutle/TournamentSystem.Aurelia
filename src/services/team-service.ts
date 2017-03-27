import { BaseApiService } from './base-api-service';
import { Team } from '../models/team';
import { json } from 'aurelia-fetch-client';

export class TeamService extends BaseApiService {

    async getAll(): Promise<Array<Team>> {
        let response = await this.httpClient.fetch('teams', {
            method: 'get'
        });

        return response.json();
    }

    async add(team: Team): Promise<Team> {

        let response = await this.httpClient.fetch('teams', {
            method: 'post',
            body: json(team)
        });

        return response.json();
    }

    async delete(team: Team) {
        
        let response = await this.httpClient.fetch('teams', {
            method: 'delete',
            body: json(team)
        });
    }

    async getById(id: string): Promise<Team> {
        
        let response = await this.httpClient.fetch(`teams/${id}`, {
            method: 'get'
        });

        return response.json();
    }
}