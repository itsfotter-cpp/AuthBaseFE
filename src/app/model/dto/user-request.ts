import { RoleRequest } from "./role-request";

export interface UserRequest {
    email: string;
    userName: string;
    userFirstName: string;
    userLastName: string;
    userPassword: string;
    role: RoleRequest[];
}
