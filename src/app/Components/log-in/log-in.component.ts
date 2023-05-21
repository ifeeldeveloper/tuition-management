import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { LogIn } from "src/app/Model/logInModel";
import { ApiService } from "src/app/Service/api.service";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  logIn: LogIn = new LogIn();

  constructor(
    private _apiService: ApiService,
    private _router: Router,
    private _cookieService: CookieService
  ) {
    console.log("Hello from LogIn component")
  }
  ngOnInit(): void {

  }

  onLogIn() {

    this._apiService.postLogIn(this.logIn).subscribe(
      res => {
        let tokenValue = res.token;
        this._cookieService.set("access_token", tokenValue);
        let consoleValue = this._cookieService.get("access_token");
        console.log(consoleValue);
        this._router.navigateByUrl("/Home");
      },
      err => {
        console.log(err);
      }
    );


    //  let userCredential=this.logIn.LogInFormGroup.value();

    //   this._apiService.postLogIn(userCredential).subscribe(
    //     res=>{
    //       let tokenValue=res.token;
    //       this._cookieService.set("access_token",tokenValue);
    //       let consoleValue= this._cookieService.get("access_token"); 
    //       console.log(consoleValue);
    //       this._router.navigateByUrl("/home");

    //     },
    //     err=>{
    //       alert("Failed to LogIn")
    //       console.log(err);
    //     }
    //   );

  }

}
