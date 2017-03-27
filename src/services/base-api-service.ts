import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class BaseApiService {

    baseUrl: string = "http://localhost:3000/api/";
    httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        
        this.httpClient = httpClient;
        
        this.httpClient.configure(config => {
            config
                .withBaseUrl(this.baseUrl)
                .withDefaults({
                    headers: {
                        'Accept':'application/json'
                    }
                })
        });
    }

    get isRequesting(): boolean {
        return this.httpClient.isRequesting;
    }
}