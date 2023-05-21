import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private _router: Router,
     private _cookieServices:CookieService) {
  }
  canActivate(): boolean {
    const tokenValue = this._cookieServices.get('access_token');
    if (!tokenValue) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }
}
