import { Component, OnInit, Input } from '@angular/core';
import { MyViewService } from '../my-view.service';
import { Ng2Storage } from '../../shared/storage';

@Component({
  selector: 'wgrs-lien-tabs',
  templateUrl: './lien-tabs.component.html',
  styleUrls: ['./lien-tabs.component.scss']
})
export class LienTabsComponent implements OnInit {
  @Input() storedLiens;
  public selectedLien;
  private ynOptions = ['YES', 'NO'];
  constructor(private myViewService: MyViewService, private storage: Ng2Storage) { }

  ngOnInit() {
    console.log(this.storedLiens);
    this.selectedLien = this.myViewService.lienStorageData[this.myViewService.lienStorageData.length - 1];
  }

  removeLienFromStorage(lienObj: any){
    var index = this.myViewService.lienStorageData.indexOf(lienObj);
    this.myViewService.lienStorageData.splice(index, 1);  
    this.storage.setSession('lienData', JSON.stringify(this.myViewService.lienStorageData));
  }

  setSelectedLien(lien){
    this.selectedLien = lien;
  }
}
