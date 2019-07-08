import { Component } from '@angular/core';
import { CommonService } from './shared/common.service';


@Component({
  selector: 'wgrs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(private commonService: CommonService) { }

  ngOnInit(){
  }

  // showSearchFilter() {
  //   this.isShowSearchFilter = !this.isShowSearchFilter;
  // }
}
