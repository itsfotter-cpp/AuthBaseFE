import { Time } from "@angular/common";
import { StateDemand } from "./state-demand";
import { TypeDemand } from "./type-demand";

export interface Demand {
    idDemand: number;
    dateDemand: Date;
    stateDemand: StateDemand;
    typeDemand: number;
    absenceDateStart: Date;
    absenceDateEnd: Date;
    absenceTimeStart: Time;
    absenceTimeEnd: Time;
    note: string;
}
