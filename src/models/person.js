"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("./base-model");
class Person extends base_model_1.BaseModel {
    get fullName() {
        return this.firstname + ' ' + this.lastname;
    }
}
exports.Person = Person;
