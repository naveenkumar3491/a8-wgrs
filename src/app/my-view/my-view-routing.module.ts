import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyViewComponent } from "src/app/my-view/my-view.component";

const routes: Routes = [
  { path: '', component: MyViewComponent }

];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class MyViewRoutingModule { }
