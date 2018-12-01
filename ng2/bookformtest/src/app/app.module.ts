import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PhoneNumComponent } from './phone-num/phone-num.component';
import {HttpClientModule} from '@angular/common/http';
import { PhotosService } from './photos.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
