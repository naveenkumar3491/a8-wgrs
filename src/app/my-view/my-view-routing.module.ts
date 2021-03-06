import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyViewComponent } from "src/app/my-view/my-view.component";
import { LienViewComponent } from './lien-view/lien-view.component';

const routes: Routes = [
  { path: 'my-view', component: MyViewComponent },
  { path: 'lien-view', component: LienViewComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MyViewRoutingModule { }
