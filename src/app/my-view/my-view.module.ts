import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchFilterComponent } from "src/app/my-view/search-filter/search-filter.component";
import { MyViewRoutingModule } from "src/app/my-view/my-view-routing.module";
import { MyViewComponent } from "src/app/my-view/my-view.component";
import { AgGridModule } from 'ag-grid-angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LienViewComponent } from "src/app/my-view/lien-view/lien-view.component";


@NgModule({
    declarations: [
    MyViewComponent,
    SearchFilterComponent,
    LienViewComponent
  ],
  imports:[
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule,
      AgGridModule.withComponents([]),
      MyViewRoutingModule
  ],
    providers: []
})
export class MyViewModule{

}