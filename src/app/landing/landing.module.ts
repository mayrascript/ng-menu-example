import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PageTwoComponent } from './page-two/page-two.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
  ],
  declarations: [LandingComponent, HomeComponent, PageTwoComponent]
})
export class LandingModule { }
