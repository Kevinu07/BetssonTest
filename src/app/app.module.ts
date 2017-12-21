import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RaceBoxComponent } from './components/racebox/racebox.component';
import { FilterComponent } from './components/filter/filter.component';
import { CounterComponent } from './components/counter/counter.component';
import { CountryFlagComponent } from './components/countryflag/countryflag.component';

import { AppSettings } from './app.settings';
import { DataProvider } from './providers/data.provider';
import { FilterService } from './components/filter/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    RaceBoxComponent,
    FilterComponent,
    CounterComponent,
    CountryFlagComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppSettings, DataProvider, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
