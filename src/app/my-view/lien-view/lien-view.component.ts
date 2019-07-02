import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MyViewService } from '../my-view.service';

@Component({
  selector: 'app-lien-view',
  templateUrl: './lien-view.component.html',
  styleUrls: ['./lien-view.component.scss']
})
export class LienViewComponent implements OnInit {
  private lienId: string;
  private storedLiens: any;
  constructor(private route: ActivatedRoute, private myViewService: MyViewService) { }

  ngOnInit() {
    
    this.lienId = this.route.snapshot.paramMap.get("lienId");
    // console.log(this.route.snapshot.paramMap.get("lienId"))
    // this.route.paramMap.subscribe(params => {
    //   console.log(params);
    // })
    this.myViewService.getLienDetails({lienId:this.lienId, loggedInUser:"fn100"}).subscribe(data => {
      console.log(data);
      this.storedLiens = this.myViewService.lienStorageData;
    })
  }
}
