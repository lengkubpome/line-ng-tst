import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MemberService } from './services/member.service';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, HeaderComponent],
  providers: [MemberService],
  bootstrap: [AppComponent],
})
export class AppModule {}
