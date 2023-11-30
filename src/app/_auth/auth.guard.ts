import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

export const AuthGuard: CanActivateFn = (route, _state) => {
  
    const authService: UserAuthService = inject(UserAuthService);
    const router: Router = inject(Router);
    const userService: UserService = inject(UserService);

    if(authService.getToken() != null) {
      const role = route.data["roles"] as Array<string>
      if(role) {
          const match = userService.roleMatch(role);
          if(match) {
            return true;
          } else {
            router.navigate(['/forbidden']);
            return false;
          }
      }
    }

    router.navigate(['/login']);
    return false;
    
};
