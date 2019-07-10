import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchFilterComponent } from "src/app/my-view/search-filter/search-filter.component";
import { MyViewRoutingModule } from "src/app/my-view/my-view-routing.module";
import { MyViewComponent } from "src/app/my-view/my-view.component";
import { AgGridModule } from 'ag-grid-angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LienTabsComponent } from './lien-tabs/lien-tabs.component';
import { LienViewComponent } from './lien-view/lien-view.component';
import { MyViewService } from './my-view.service';
import { CoreModule } from '../core/core.module';
import { LienDetailsComponent } from './lien-details/lien-details.component';
import { SearchFilterService } from './search-filter/search-fliter.service';


@NgModule({
    declarations: [
    MyViewComponent,
    SearchFilterComponent,
    LienViewComponent,
    LienTabsComponent,
    LienDetailsComponent
  ],
  imports:[
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule,
      AgGridModule.withComponents([]),
      MyViewRoutingModule,
      CoreModule
  ],
    providers: [MyViewService, SearchFilterService]
})
export class MyViewModule{

}