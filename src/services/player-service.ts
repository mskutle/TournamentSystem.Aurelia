import { BaseApiService } from './base-api-service';
import { json } from 'aurelia-fetch-client';
import { Player } from '../models/player';

export class PlayerService extends BaseApiService {
    
    async getAll(): Promise<Array<Player>> {
        
        let response = await this.httpClient.fetch('players', {
            method: 'get'
        });

        return response.json();
    }

    async update(player: Player): Promise<Player> {

        let response = await this.httpClient.fetch(`players/${player._id}`, {
            method: 'put',
            body: json(player)
        });

        return response.json();
    }
}