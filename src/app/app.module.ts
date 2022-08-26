import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CropiqModule } from './cropiq/cropiq.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    CropiqModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
