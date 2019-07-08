import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MyViewService } from '../my-view.service';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-lien-view',
  templateUrl: './lien-view.component.html',
  styleUrls: ['./lien-view.component.scss']
})
export class LienViewComponent implements OnInit {
  private lienId: string;
  private storedLiens: any;
  private selectedLien;
  constructor(private route: ActivatedRoute, private myViewService: MyViewService,
    private commonService: CommonService) { }

  ngOnInit() {
    
    this.commonService.loginUser().subscribe(userData => {
      console.log(userData);
      this.lienId = this.route.snapshot.paramMap.get("lienId");
      this.myViewService.getLienDetails({lienId:this.lienId, loggedInUser:"fn100"}).subscribe(data => {
        console.log(data);
        this.storedLiens = this.myViewService.lienStorageData;
        this.selectedLien = this.myViewService.lienStorageData[this.myViewService.lienStorageData.length - 1];
      })
    });
    // console.log(this.route.snapshot.paramMap.get("lienId"))
    // this.route.paramMap.subscribe(params => {
    //   console.log(params);
    // })
    
  }
}
