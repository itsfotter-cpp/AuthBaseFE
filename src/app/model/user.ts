import { Role } from "./role";

export interface User {
    idUser: number;
    uuid: string;
    email: string;
    userName: string;
    userFirstName: string;
    userLastName: string;
    userPassword: string;
    role: Role[];
    active: number;
}
