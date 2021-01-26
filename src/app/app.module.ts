import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FillCardDetailsComponent } from './fill-card-details/fill-card-details.component';
import { ShowCardDetailsComponent } from './show-card-details/show-card-details.component';
import { reducer } from './reducers/card.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FillCardDetailsComponent,
    ShowCardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,
    BrowserAnimationsModule, MaterialModule,
    ToastrModule.forRoot({ timeOut: 5000, positionClass: 'toast-top-right' }),
    StoreModule.forRoot({ details: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
