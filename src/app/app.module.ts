import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DropdownModule } from 'ng2-bootstrap';

import { routing } from "./app.routing";

import { MetricService } from 'services/metric.service';
import { ProductService } from 'services/product.service';
import { BackendService } from 'services/backend.service';
import { Logger } from 'services/logger.service';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MetricsListComponent } from './metrics-list/metrics-list.component';
import { LotRowComponent } from './lot-row/lot-row.component';
import { FormValidationComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MetricsListComponent,
    LotRowComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DropdownModule.forRoot()
  ],
  providers: [
    BackendService,
    MetricService,
    ProductService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
