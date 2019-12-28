import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [ HomeComponent, NavigationComponent, HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    HeaderComponent,NavigationComponent
  ]
})
export class CoreModule { }
