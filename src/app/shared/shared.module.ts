import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Http, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { AppMaterialModule } from './app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../environments/environment';
import 'hammerjs';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppMaterialModule,
    CalendarModule.forRoot(),
    AgmCoreModule.forRoot(environment.googleMaps)
  ],
  exports: [
    AgmCoreModule,
    CommonModule,
    CalendarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppMaterialModule
  ]
})
export class SharedModule { }
