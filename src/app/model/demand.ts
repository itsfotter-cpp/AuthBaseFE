import { Time } from "@angular/common";

export interface Demand {
    idDemand: number;
    dateDemand: Date;
    stateDemand: string;
    typeDemand: number;
    user: string;
    absenceDateStart: Date;
    absenceDateEnd: Date;
    absenceTimeStart: Time;
    absenceTimeEnd: Time;
    note: string;
}
