import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TelerikReportingModule } from '@progress/telerik-angular-report-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TelerikReportingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
