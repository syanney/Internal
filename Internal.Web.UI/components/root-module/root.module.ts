import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        BrowserModule,        
        RootRoutingModule
    ],
    declarations: [
        RootComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    bootstrap: [RootComponent]
})
export class RootModule { }

