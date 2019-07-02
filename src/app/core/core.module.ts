import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from "src/app/core/header/header.component";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        NgbModule
    ],
    providers: [],
    exports: [HeaderComponent],
})
export class CoreModule{

}