import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { ComponentsModule } from '../components/components.module';
import { SignupComponent } from '../signup/signup.component';
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule
    ],
    declarations: [ HomeComponent,SignupComponent ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
