import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http';
import { MyViewModule } from "src/app/my-view/my-view.module";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { Ng2Storage } from './shared/storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    MyViewModule
  ],
  providers: [Ng2Storage],
  bootstrap: [AppComponent]
})
export class AppModule { }
