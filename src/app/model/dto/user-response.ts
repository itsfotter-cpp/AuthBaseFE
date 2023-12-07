import { RoleResponse } from "./role-response";

export interface UserResponse {
    uuid: string;
    email: string;
    userName: string;
    role: RoleResponse[];
}
