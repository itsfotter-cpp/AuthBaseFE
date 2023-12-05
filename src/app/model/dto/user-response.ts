import { RoleResponse } from "./role-response";

export interface UserResponse {
    uuid: string;
    userName: string;
    role: RoleResponse[];
}
