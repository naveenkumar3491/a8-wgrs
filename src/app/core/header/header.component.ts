import { Component } from '@angular/core';
import { CommonService } from '../../shared/common.service';

@Component({
	selector: 'wgrs-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	showSearch: boolean = false;
	constructor(private commonService: CommonService) {

	}
	
	showSearchFilter(){
		this.showSearch = !this.showSearch;
		this.commonService.showSearchFilter.emit(this.showSearch);
	}
}