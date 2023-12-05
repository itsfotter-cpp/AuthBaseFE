import { UserResponse } from "./user-response";

export interface JwtResponse {
    user: UserResponse;
    jwtToken: string;    
}
