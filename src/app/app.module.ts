import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LogInComponent } from "./Components/log-in/log-in.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import{ HttpClientModule} from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import {authInterceptorProviders } from "./Service/interceptor";
import { AuthGuardService } from "./Service/authGuard.service";


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService,authInterceptorProviders,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
