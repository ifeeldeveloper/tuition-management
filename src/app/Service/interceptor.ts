
import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

const TOKEN_HEADER_KEY = 'Authorization';
@Injectable(
    // {
    //     providedIn:'root'
    // }
)
export class InterceptorService{
    constructor(private _cookieService:CookieService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let authReq = req;
        const token = this._cookieService.get('access_token');
        if(token != null && token != ""){
            authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});
        }
       return next.handle(authReq);   
    }
}
export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi : true}
]