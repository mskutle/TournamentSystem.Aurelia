import * as moment from 'moment';
import { BaseModel } from "./base-model";

export class Person extends BaseModel {

    firstname: string;
    lastname: string;
    dateOfBirth: moment.Moment;

    get fullName(): string {
        return this.firstname + ' ' + this.lastname;
    }
}