import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MyViewComponent } from "src/app/my-view/my-view.component";
import { LienViewComponent } from "src/app/my-view/lien-view/lien-view.component";

const routes: Routes = [
  { path: '', redirectTo: 'my-view', pathMatch: 'full' },
  { path: 'lien-view/:lienId', component: LienViewComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers:[{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
