import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError, EMPTY, Observable, throwError } from "rxjs";
import { UserAuthService } from "../_services/user-auth.service";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private userAuthService: UserAuthService,
        private router: Router,
        private toastService: ToastrService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get("No-Auth") === "True") {
            return next.handle(req.clone());
        }
        const token = this.userAuthService.getToken();
        req = this.addToken(req, token);
        return next.handle(req).pipe(
            catchError(
                (err: HttpErrorResponse) => {
                    
                    if(err.status === 401) {
                        this.router.navigate(['/login']);
                    } else if(err.status === 403) {
                        this.router.navigate(['/forbidden']);
                    } else if(err.status === 400) {
                        this.toastService.error(err.message, "ATTENZIONE SALVO in arrivo!");
                    }
                    //return throwError(err.error);
                    return EMPTY;
                }
                
            ));
    }

    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + token
            }
        });
    }
    
}