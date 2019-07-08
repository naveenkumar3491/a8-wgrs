import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MyViewService } from '../my-view.service';
import { Ng2Storage } from '../../shared/storage';

@Component({
  selector: 'wgrs-lien-tabs',
  templateUrl: './lien-tabs.component.html',
  styleUrls: ['./lien-tabs.component.scss']
})
export class LienTabsComponent implements OnInit {
  @Input() storedLiens;
  @Input() selectedLien;
  private ynOptions = ['YES', 'NO'];
  private isSticky: boolean = false;
  constructor(private myViewService: MyViewService, private storage: Ng2Storage) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 150;
  }

  removeLienFromStorage(lienObj: any){
    var index = this.myViewService.lienStorageData.indexOf(lienObj);
    this.myViewService.lienStorageData.splice(index, 1);  
    this.storage.setLocalStorage('lienData', JSON.stringify(this.myViewService.lienStorageData));
  }

  setSelectedLien(lien){
    this.selectedLien = lien;
  }
}
