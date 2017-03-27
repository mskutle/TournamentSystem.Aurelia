"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_model_1 = require("./base-model");
class Team extends base_model_1.BaseModel {
    constructor(name) {
        super();
        this.name = name;
    }
}
exports.Team = Team;
