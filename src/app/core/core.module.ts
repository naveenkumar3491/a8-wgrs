import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from "src/app/core/header/header.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        NgbModule
    ],
    providers: [],
    exports: [HeaderComponent, FooterComponent],
})
export class CoreModule{

}