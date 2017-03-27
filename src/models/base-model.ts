import * as moment from 'moment';

export class BaseModel {
    _id: string;
    createdAt: moment.Moment;
    lastChangedAt: moment.Moment;
}