import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private _cookieService:CookieService,
    private _router:Router
  ){
    console.log("Hello from Home component")
  }

  ngOnInit(): void {

  }

  logout(){
    this._cookieService.delete("access_token");
    this._router.navigateByUrl("login");
  }

}
