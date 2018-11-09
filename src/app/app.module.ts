import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkipboModule } from './skipbo/skipbo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule, SkipboModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
