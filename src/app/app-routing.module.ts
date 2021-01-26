import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FillCardDetailsComponent } from './fill-card-details/fill-card-details.component';
import { ShowCardDetailsComponent } from './show-card-details/show-card-details.component';


const routes: Routes = [
  { path: '', component: ShowCardDetailsComponent },
  { path: 'fill', component: FillCardDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
